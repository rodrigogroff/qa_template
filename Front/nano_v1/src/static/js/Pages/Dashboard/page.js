import { MultiLanguage } from "./language";
import { getFromSession, setToSession, fadeIn, fadeOut } from "@app/Infra/Util";
import ImgLoader from "@app/Components/Images/ImageLoader";

import Splash from "./splash";

export default class {
  constructor(params) {
    this.params = params;

    // ----------------------------------------------------------------
    // page events here -----------------------------------------------
    // ----------------------------------------------------------------

    $(document).ready(function () {
      $('#mainForm').hide();
      ImgLoader.loadAsync('stats1', 'src/static/img/stats1.png')
      ImgLoader.loadAsync('stats2', 'src/static/img/stats2.png')
      ImgLoader.loadAsync('stats3', 'src/static/img/stats3.png')

      if (getFromSession("splashed") !== "true") {
        setToSession("splashed", "true");
        $("body").css("background-color", "#FFFFFF");
        $("#splash").html(Splash.getHtml());
        $("#appHeader").css("display", "none");
        setTimeout(function () {
          fadeIn($("#splash")[0], 60);
          setTimeout(function () {
            fadeOut($("#splash")[0], 60);
            setTimeout(function () {
              $("#splash").css("display", "none");
              $("body").css("background-color", "#CFCFCF");
              $("#appHeader").css("display", "block");
              fadeIn($("#appHeader")[0], 30);
              $('#mainForm').show();
            }, 400);
          }, 2000);
        }, 900);
      }
      else
        $('#mainForm').show();
    });
  }

  getHtml() {

    var l0 = MultiLanguage(0);
    var l1 = MultiLanguage(1);
    var l2 = MultiLanguage(2);
    var l3 = MultiLanguage(3);
    var l4 = MultiLanguage(4);
    var l5 = MultiLanguage(5);
    var l6 = MultiLanguage(6);
    var l7 = MultiLanguage(7);
    var l8 = MultiLanguage(8);

    return `<div id='mainForm'>
            <div style="width:296px" class="form-row-group-dark"><br>
            <p>${l0}</p>
              ${ImgLoader.getHtml('stats1', 'max-width:100%;max-height:100%;padding-top:10px')}
              <p>${l1}</p>
              ${ImgLoader.getHtml('stats2', 'max-width:100%;max-height:100%;padding-top:10px')}
              ${ImgLoader.getHtml('stats3', 'max-width:100%;max-height:100%;padding-top:10px')}
              <p>${l2}</p>
              <br>
              <div align='left'>
              <b>${l3}</b>
              <p style='padding-left:10px;font-size:11px'>- ${l4}</p>
              <p style='padding-left:10px;font-size:11px'>- ${l5}</p>
              <p style='padding-left:10px;font-size:11px'>- ${l6}</p>
              <p style='padding-left:10px;font-size:11px'>- ${l7}</p>
              </div>
              <br>
              <button class="button circle block green">${l8}</button>
              <br>              
            </div>
            <br>
            <br>
            </div>`;
  }
}
