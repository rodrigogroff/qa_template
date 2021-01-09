
import { MultiLanguage } from "../MultiLanguage";
import { imageChange } from "@app/Infra/Util";
import EmailField from "@app/Components/Fields/Email";
import PasswordField from "@app/Components/Fields/Password";
import { buildTable2TD, BaseLoader } from "@app/Components/Images/BaseLoader";
import Popup from "@app/Components/Modals/Popup";

import { mobileCheck } from "@app/Infra/Util";
import ImgLoader from "@app/Components/Images/ImageLoader";

export default class Register_2 {
  static elements() {
    return {
      formEmail: "formEmail",
      emailID: "emailID",
      passwordID: "passwordID",
      passwordConfID: "passwordConfID",
      btnNext: "btnNext",
      btnPrev: "btnPrev",
    };
  }

  static getHtml() {
    if (mobileCheck()) return this.htmlMobile();
    return this.htmlDesktop();
  }

  static htmlMobile() {
    var elements = this.elements();
    var registerMsg = MultiLanguage(3);
    var nextMsg = MultiLanguage(16);
    var stepMsg = MultiLanguage(17);
    var prevMsg = MultiLanguage(22);
    var placeholderEmail = MultiLanguage(4);
    var placeholderEmail_label = MultiLanguage(23);
    var placeholderPass_Title = MultiLanguage(8);
    var label_password = MultiLanguage(7);
    var label_passwordConf = MultiLanguage(24);

    return `<div style="width:296px;" class="form-row-group-dark">
              <div style='min-height:355px'>                        
                  <table><tr><td><h3>${registerMsg}</h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 2/4</h4></td></tr></table>
                  <br>
                  <div class="form-row-group" align="left" id='registerIdForm'>
                      <label for='${elements.emailID}' style='padding-left:20px'><b>${placeholderEmail_label}</b></label>
                      ${EmailField.getHtml(elements.emailID, placeholderEmail)}
                      <br>
                      <label for='${elements.passwordID}' style='padding-left:20px'><b>${label_password}</b></label>
                      ${PasswordField.getHtml(elements.passwordID, "", placeholderPass_Title)}
                      <label for='${elements.passwordConfID}' style='padding-left:20px'><b>${label_passwordConf}</b></label>
                      ${PasswordField.getHtml(elements.passwordConfID, "", placeholderPass_Title)}
                      <br>
                  </div>
                  <br>
              </div>
              <div>
                  <table width='100%'>
                      <tr>
                          <td><a id="${elements.btnPrev}" class="button circle block green">${prevMsg}</a></td>
                          <td width='20px'></td>
                          <td><a id="${elements.btnNext}" class="button circle block green">
                                ${buildTable2TD(nextMsg, BaseLoader(), elements.btnNext)}
                              </a>
                          </td>
                      </tr>
                  </table>
              </div>
              <br>
              <br>
            </div>${Popup.getHtml()}`;
  }

  static htmlDesktop() {
    var elements = this.elements();
    var registerMsg = MultiLanguage(3);
    var nextMsg = MultiLanguage(16);
    var stepMsg = MultiLanguage(17);
    var prevMsg = MultiLanguage(22);
    var placeholderEmail = MultiLanguage(4);
    var placeholderEmail_label = MultiLanguage(23);
    var placeholderPass_Title = MultiLanguage(8);
    var label_password = MultiLanguage(7);
    var label_passwordConf = MultiLanguage(24);

    return `<div style="width:1150px" class="form-row-group-dark"><br><br><br>
              <table width='100%'><tr>
              <td width='90px'></td>
              <td valign='top' width='550px'> 
                ${ImgLoader.getDirectHtml("logoSplash", "src/static/img/splash.png", "max-width:100%;max-height:100%;")}
              </td>
              <td width='90px'></td>
              <td valign='top' width='490px'>
                <div style="width:296px;">
                  <div style='min-height:355px'>
                        <table><tr><td><h3>${registerMsg}</h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 2/4</h4></td></tr></table>
                        <br>
                        <div class="form-row-group" align="left" id='registerIdForm'>
                            <label for='${elements.emailID}' style='padding-left:20px'><b>${placeholderEmail_label}</b></label>
                            ${EmailField.getHtml(elements.emailID, placeholderEmail)}
                            <br>
                            <label for='${elements.passwordID}' style='padding-left:20px'><b>${label_password}</b></label>
                            ${PasswordField.getHtml(elements.passwordID, "", placeholderPass_Title)}
                            <label for='${elements.passwordConfID}' style='padding-left:20px'><b>${label_passwordConf}</b></label>
                            ${PasswordField.getHtml(elements.passwordConfID, "", placeholderPass_Title)}
                            <br>
                        </div>
                        <br>
                    </div>
                    <div>
                        <table width='100%'>
                            <tr>
                                <td><a id="${elements.btnPrev}" class="button circle block green">${prevMsg}</a></td>
                                <td width='20px'></td>
                                <td><a id="${elements.btnNext}" class="button circle block green">
                                      ${buildTable2TD(nextMsg, BaseLoader(), elements.btnNext)}
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br>
                    <br>
                </div>
              </td></tr></table>
            </div>${Popup.getHtml()}`;
  }

  static validate(_params) {
    var elements = this.elements();
    var valPass = PasswordField.validate(
      elements.passwordID,
      _params,
      MultiLanguage(5),
      MultiLanguage(9)
    );
    var valConfPass = PasswordField.validate(
      elements.passwordConfID,
      _params,
      MultiLanguage(5),
      MultiLanguage(9)
    );
    var valEmail = EmailField.validate(
      elements.emailID,
      _params,
      MultiLanguage(5),
      MultiLanguage(6)
    );

    if (valPass) {
      valConfPass =
        $("#" + elements.passwordID).val() ==
        $("#" + elements.passwordConfID).val();
      if (!valConfPass)
        imageChange("#fail" + elements.passwordConfID, "lock_err.png");
    }

    if (!(valEmail && valPass && valConfPass)) return false;
    return true;
  }
}
