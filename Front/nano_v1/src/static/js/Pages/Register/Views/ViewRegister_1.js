import { AppLanguage, MultiLanguage } from "../language";
import StringText from "@app/Components/Fields/String";
import Popup from "@app/Components/Modals/Popup";
import LanguageSelect from "@app/Components/Selects/LanguageSelect";
import { buildTable2TD, BaseLoader } from "@app/Components/Images/BaseLoader";
import { mobileCheck } from "@app/Infra/Util";
import ImgLoader from "@app/Components/Images/ImageLoader";

export default class Register_1 {
  static elements() {
    return {
      formID: "formID",
      socialID: "socialID",
      nameID: "nameID",
      btnNext: "btnNext",
    };
  }

  static getHtml() {
    if (mobileCheck()) return this.htmlMobile();
    return this.htmlDesktop();
  }

  static htmlMobile() {
    var elements = this.elements();
    var _languages = new AppLanguage().availableLanguages;
    var language = MultiLanguage(10);
    var registerMsg = MultiLanguage(3);
    var nextMsg = MultiLanguage(16);
    var stepMsg = MultiLanguage(17);
    var placeholderID_label = MultiLanguage(19);
    var placeholderName_label = MultiLanguage(21);

    return `<div style="width:296px;" class="form-row-group-dark"><br>
                    <div style='min-height:355px'>                        
                        <table><tr><td width='120px'><label for="languageSel">${language}</label></td><td width='50%'>${LanguageSelect.getHtml(_languages)}</td></tr></table>
                        <table><tr><td><h3>${registerMsg}</h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 1/4</h4></td></tr></table>
                        <br>
                        <div class="form-row-group" align="left" id='registerIdForm'>
                            <label for='${elements.socialID}' style='padding-left:20px'><b>${placeholderID_label}</b></label>
                            <br>
                            ${StringText.getHtml(elements.socialID, "")}
                            <br>
                            <label for='${elements.nameID}' style='padding-left:20px'><b>${placeholderName_label}</b></label>
                            <br>
                            ${StringText.getHtml(elements.nameID, "")}
                            <br>
                        </div>
                    </div>
                    <div align='center' id="${elements.btnNext}" class="button circle block green">
                        ${buildTable2TD(nextMsg, BaseLoader(), elements.btnNext)}
                    </div>
                    <br>
                    <br>
                </div>${Popup.getHtml()}`;
  }

  static htmlDesktop() {
    var elements = this.elements();
    var _languages = new AppLanguage().availableLanguages;
    var registerMsg = MultiLanguage(3);
    var nextMsg = MultiLanguage(16);
    var stepMsg = MultiLanguage(17);
    var placeholderID_label = MultiLanguage(19);
    var placeholderName_label = MultiLanguage(21);

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
                    <table width='100%'><tr><td width='50%'><h3>${registerMsg}</h3></td><td width='20px'></td><td align='right'><h4 style='color:#009E96'>${stepMsg} 1/4</h4></td></tr></table>    
                    ${LanguageSelect.getHtml(_languages)}
                    <br>
                    <div class="form-row-group" align="left" id='registerIdForm'>
                        <label for='${elements.socialID}' style='padding-left:20px'><b>${placeholderID_label}</b></label>
                        <br>
                        ${StringText.getHtml(elements.socialID, "", true)}
                        <br>
                        <label for='${elements.nameID}' style='padding-left:20px'><b>${placeholderName_label}</b></label>
                        <br>
                        ${StringText.getHtml(elements.nameID, "")}
                        <br>
                    </div>
                  </div>
                  <div align='center' id="${elements.btnNext}" class="button circle block green">
                      ${buildTable2TD(nextMsg, BaseLoader(), elements.btnNext)}
                  </div>
                  <br>
                  <br>
              </div>
              </td></tr></table>
            </div>${Popup.getHtml()}`;
  }

  static maskUp() {
    var elements = this.elements();
    VMasker($("#" + elements.socialID)).maskPattern("999.999.999-99");
  }

  static validate(_params) {
    var elements = this.elements();
    var nameField = StringText.validateName(
      elements.nameID,
      _params,
      MultiLanguage(5),
      MultiLanguage(26)
    );
    var cpfField = StringText.validateCPF(
      elements.socialID,
      _params,
      MultiLanguage(5),
      MultiLanguage(25)
    );
    if (!(cpfField && nameField)) return false;
    return true;
  }
}
