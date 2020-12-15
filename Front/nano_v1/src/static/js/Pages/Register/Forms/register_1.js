import { AppLanguage, MultiLanguage } from "../language";
import StringText from "@app/Components/Fields/String";
import Popup from "@app/Components/Modals/Popup";
import LanguageSelect from "@app/Components/Selects/LanguageSelect";
import { buildTable2TD, BaseLoader } from "@app/Components/Images/BaseLoader";

export default class {
  static elements() {
    return {
      formID: "formID",
      socialID: "socialID",
      nameID: "nameID",
      btnNext: "btnNext",
    };
  }

  static getHtml() {
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
