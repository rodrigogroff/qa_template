import { MultiLanguage } from "../language";
import NumberField from "@app/Components/Fields/Number";
import Popup from "@app/Components/Modals/Popup";
import { buildTable2TD, BaseLoader } from "@app/Components/Images/BaseLoader";

export default class {
  static elements() {
    return {
      tokenID: "tokenID",
      btnNext: "btnNext",
      btnPrev: "btnPrev",
    };
  }

  static getHtml() {
    var elements = this.elements();

    var registerMsg = MultiLanguage(3);
    var nextMsg = MultiLanguage(16);
    var stepMsg = MultiLanguage(17);
    var prevMsg = MultiLanguage(22);
    var placeholder = MultiLanguage(27);
    var info = MultiLanguage(28);
    var title = "Token";

    return `<div style="width:296px;" class="form-row-group-dark">
                    <div style='min-height:355px'>
                    <table><tr><td><h3><b>${registerMsg}</b></h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 3/4</h4></td></tr></table>
                        <div class="form-row-group" align="left" id='registerIdForm'>
                            <br>    
                            <span style='padding-left:20px'><b>${title}</b></span>
                            <br>
                            <label for='${
                              elements.tokenID
                            }'><p style='padding-left:20px'>${info}</p></label>
                            <br>
                            ${NumberField.getHtml(
                              elements.tokenID,
                              placeholder
                            )}
                            <br>
                        </div>
                        <br>
                    </div>
                    <div>
                        <table width='100%'>
                            <tr>
                                <td><a id="${
                                  elements.btnPrev
                                }" class="button circle block green">${prevMsg}</a></td>
                                <td width='20px'></td>
                                <td><a id="${
                                  elements.btnNext
                                }" class="button circle block green">
                                        ${buildTable2TD(
                                          nextMsg,
                                          BaseLoader(),
                                          elements.btnNext
                                        )}
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br>
                    <br>
                </div>${Popup.getHtml()}`;
  }

  static maskUp() {
    var elements = this.elements();
    VMasker($("#" + elements.tokenID)).maskPattern("9999");
  }

  static validate(_params) {
    var elements = this.elements();
    return NumberField.validate(
      elements.tokenID,
      _params,
      MultiLanguage(5),
      MultiLanguage(29)
    );
  }
}
