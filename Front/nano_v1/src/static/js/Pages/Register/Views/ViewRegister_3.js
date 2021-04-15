
import { MultiLanguage } from "../MultiLanguage";

import InputNumberField from "@app/Components/Fields/Number";
import Popup from "@app/Components/Modals/Popup";
import PopupConfirm from "@app/Components/Modals/PopupConfirm";
import { buildTable2TD, BaseLoader } from "@app/Components/Images/BaseLoader";

import { mobileCheck } from "@app/Infra/Util";
import ImgLoader from "@app/Components/Images/ImageLoader";


export default class {
  static elements() {
    return {
      tokenID: "tokenID",
      btnNext: "btnNext",
      btnPrev: "btnPrev",
      timerID: "timerID",
      _mdl_confID: "_mdl_confID",
      _mdl_btn_confID: "_mdl_btn_confID",
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
    var placeholder = MultiLanguage(27);
    var info = MultiLanguage(28);
    var title = "Token";
    var resendToken = MultiLanguage(33);

    return `<div style="width:296px;" class="form-row-group-dark">
                    ${Popup.getHtml()} 
                    ${PopupConfirm.getHtml(elements._mdl_confID, elements._mdl_btn_confID, resendToken)}
                    <div style='min-height:355px'>
                    <table><tr><td><h3>${registerMsg}</h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 3/4</h4></td></tr></table>
                        <div class="form-row-group" align="left" id='registerIdForm'>
                            <br>    
                            <h4 style='padding-left:20px'>${title}</h4></span>                            
                            <label for='${elements.tokenID}'><p style='padding-left:20px'>${info}</p></label>
                            <br>
                            ${InputNumberField.getHtml(elements.tokenID, placeholder)}
                            <br>
                            <div style='padding-left:20px' align='center'><p id='${elements.timerID}'/></div>
                        </div>
                        <br>
                    </div>
                    ${BaseLoader()}
                    <div>
                      <table width='100%'>
                          <tr>
                              <td><a id="${elements.btnPrev}" class="button circle block green">${prevMsg}</a></td>
                              <td width='20px'></td>
                              <td><a id="${elements.btnNext}" class="button circle block green">${nextMsg}</a></td>
                          </tr>
                      </table>
                    </div>
                    <br>
                    <br>
                </div>`;
  }

  static htmlDesktop() {
    var elements = this.elements();
    var registerMsg = MultiLanguage(3);
    var nextMsg = MultiLanguage(16);
    var stepMsg = MultiLanguage(17);
    var prevMsg = MultiLanguage(22);
    var placeholder = MultiLanguage(27);
    var info = MultiLanguage(28);
    var title = "Token";
    var resendToken = MultiLanguage(33);
    
    return `<div style="width:1150px" class="form-row-group-dark"><br><br><br>
              <table width='100%'><tr>
              <td width='90px'></td>
              <td valign='top' width='550px'> 
                ${ImgLoader.getDirectHtml("logoSplash", "src/static/img/splash.png", "max-width:100%;max-height:100%;")}
              </td>
              <td width='90px'></td>
              <td valign='top' width='490px'>
                <div style="width:296px;">
                  ${Popup.getHtml()} 
                  ${PopupConfirm.getHtml(elements._mdl_confID, elements._mdl_btn_confID, resendToken)}
                  <div style='min-height:355px'>
                  <table><tr><td><h3>${registerMsg}</h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 3/4</h4></td></tr></table>
                      <div class="form-row-group" align="left" id='registerIdForm'>
                          <br>    
                          <h4 style='padding-left:20px'>${title}</h4></span>                            
                          <label for='${elements.tokenID}'><p style='padding-left:20px'>${info}</p></label>
                          <br>
                          ${InputNumberField.getHtml(elements.tokenID, placeholder)}
                          <br>
                          <div style='padding-left:20px' align='center'><p id='${elements.timerID}'/></div>
                      </div>
                      <br>
                  </div>
                  ${BaseLoader()}
                  <div>
                      <table width='100%'>
                          <tr>
                              <td><a id="${elements.btnPrev}" class="button circle block green">${prevMsg}</a></td>
                              <td width='20px'></td>
                              <td><a id="${elements.btnNext}" class="button circle block green">${nextMsg}</a></td>
                          </tr>
                      </table>
                  </div>
                  <br>
                  <br>
                </div>
              </td></tr></table>
            </div>`;
  }

  static maskUp() {
    var elements = this.elements();
    VMasker($("#" + elements.tokenID)).maskPattern("9999");
  }

  static validate(_params) {
    var elements = this.elements();
    return InputNumberField.validate(
      elements.tokenID,
      _params,
      MultiLanguage(5),
      MultiLanguage(29)
    );
  }
}
