
import { MultiLanguage } from "../MultiLanguage";

import {
  buildTable2TD,
  BaseLoader,
} from "@app/Components/Images/BaseLoader";

import Popup from "@app/Components/Modals/Popup";
import { mobileCheck } from "@app/Infra/Util";

export default class {

  static elements() {
    return {
      btnSubmit: "btnSubmit",
    };
  }

  static getHtml() {
    if (mobileCheck()) return this.htmlMobile();
    return this.htmlDesktop();
  }

  static htmlMobile() {
    var elements = this.elements();
    var title = MultiLanguage(0);
    var search = MultiLanguage(4);

    return `<div style="width:296px" class="form-row-group-dark"><br>
            <h3 style='padding-top:10px;padding-bottom:4px'>${title}</h3>
            <br>
            <div class="form-row">
              <div align='center' id="${elements.btnSubmit}" class="button circle block green">
                ${buildTable2TD(search, BaseLoader(), elements.btnSubmit)}
              </div>
            </div>            
            <div class="form-row">
              <br>
              <br>
              <div id='tableData' />
              <br>
              <br>
            </div>
            <br>
              <br>
              <br>
              <br>
          </div>
        </div>${Popup.getHtml()}`;
  }

  static htmlDesktop() {
    var elements = this.elements();
    var title = MultiLanguage(0);
    var search = MultiLanguage(4);

    return `<div style="width:1150px" class="form-row-group-dark"><br><br><br>
              <h3 style='padding-top:10px;padding-bottom:4px'>${title}</h3>
              <br>
            <div class="form-row">
              <div align='center' id="${elements.btnSubmit}" class="button circle block green">
                ${buildTable2TD(search, BaseLoader(), elements.btnSubmit)}
              </div>
            </div>            
            <div class="form-row">
              <br>
              <br>
              <div id='tableData' />
              <br>
              <br>
            </div>
            <br>
              <br>
              <br>
              <br>
          </div>
              </div>${Popup.getHtml()}`;
  }

  static validate(_params) {

    return true;
  }
}
