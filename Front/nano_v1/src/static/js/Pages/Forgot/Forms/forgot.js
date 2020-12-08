import { MultiLanguage, AppLanguage } from "../language";
import EmailField from "@app/Components/Fields/Email";
import Popup from "@app/Components/Modals/Popup";
import { buildTable2TD, BaseLoader } from "@app/Components/Images/BaseLoader";
import LanguageSelect from "@app/Components/Selects/LanguageSelect";

export default class {
  static elements() {
    return {
      formMail: "formMail",
      btnSubmit: "btnSubmit",
    };
  }

  static getHtml() {
    var elements = this.elements();
    var language = MultiLanguage(3);
    var text = MultiLanguage(4);
    var placeholderEmail = MultiLanguage(0);
    var sendMsg = MultiLanguage(5);
    var title = MultiLanguage(6);

    return `<div style="width:296px" class="form-row-group-dark"><br>
            <table><tr><td width='120px'><label for="languageSel">${language}</label></td><td width='50%'>${LanguageSelect.getHtml(
      new AppLanguage().availableLanguages
    )}</td></tr></table>
            <h3 style='padding-top:10px;padding-bottom:4px'>${title}</h3>
            <div class="form-row-group" align="left">            
                <label for='${
                  elements.formMail
                }'><p style='padding-left:20px;'>${text}</p></label>
                ${EmailField.getHtml(elements.formMail, placeholderEmail)}
                <br>
                <br>
                <div class="form-row">
                    <div align='center' id="${
                      elements.btnSubmit
                    }" class="button circle block green">
                        ${buildTable2TD(
                          sendMsg,
                          BaseLoader(),
                          elements.btnSubmit
                        )}
                    </div>
                </div>
                <br>
            </div>
            <br>
            <br>
            </div>
            <br>
            <br>
        </div>${Popup.getHtml()}`;
  }

  static focus() {
    var elements = this.elements();
    $("#" + elements.formMail)[0].focus();
  }

  static validate(_params) {
    var elements = this.elements();
    var valEmail = EmailField.validate(
      elements.formMail,
      _params,
      MultiLanguage(1),
      MultiLanguage(2)
    );
    if (!valEmail) return false;
    document.activeElement.blur();
    return true;
  }
}
