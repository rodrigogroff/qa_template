import { MultiLanguage } from "../language";
import { mobileCheck } from "@app/Infra/Util";
import ImgLoader from "@app/Components/Images/ImageLoader";


export default class {
  static elements() {
    return {
      btnLogin: "btnLogin",
    };
  }

  static getHtml() {
    if (mobileCheck()) return this.htmlMobile();
    return this.htmlDesktop();
  }

  static htmlMobile() {
    var elements = this.elements();

    var registerMsg = MultiLanguage(3);
    var stepMsg = MultiLanguage(17);
    var title = MultiLanguage(31);
    var info = MultiLanguage(32);
    var login = MultiLanguage(14);

    return `<div style="width:296px;" class="form-row-group-dark">
                    <div style='min-height:355px'>
                        <table><tr><td><h3>${registerMsg}</h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 4/4</h4></td></tr></table>
                        <div class="form-row-group" align="left" id='registerIdForm'>
                            <br>
                            <div align='center'>
                                <p style='padding-left:20px' align='center'><b>${title}</b></p>
                            </div>
                            <br>
                            <div align='center'>
                                <img src='src/static/img/success_big.png' alt=' ' style='width:60;height:60px' />
                            </div>
                            <br>
                            <p style='padding-left:20px'>${info}</p>
                            <br>
                        </div>
                        <br>
                    </div>
                    <a id="${elements.btnLogin}" href='/login' class="button circle block green">${login}</a>
                    <br>
                    <br>
                </div>`;
  }

  static htmlDesktop() {
    var elements = this.elements();

    var registerMsg = MultiLanguage(3);
    var stepMsg = MultiLanguage(17);
    var title = MultiLanguage(31);
    var info = MultiLanguage(32);
    var login = MultiLanguage(14);

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
                        <table><tr><td><h3>${registerMsg}</h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 4/4</h4></td></tr></table>
                        <div class="form-row-group" align="left" id='registerIdForm'>
                            <br>
                            <div align='center'>
                                <p style='padding-left:20px' align='center'><b>${title}</b></p>
                            </div>
                            <br>
                            <div align='center'>
                                <img src='src/static/img/success_big.png' alt=' ' style='width:60;height:60px' />
                            </div>
                            <br>
                            <p style='padding-left:20px'>${info}</p>
                            <br>
                        </div>
                        <br>
                    </div>
                    <a id="${elements.btnLogin}" href='/login' class="button circle block green">${login}</a>
                    <br>
                    <br>
                  </div>
              </td></tr></table>
            </div>`;
  }
}
