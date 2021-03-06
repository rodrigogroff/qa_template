
import { getCurrentLanguage, MultiLanguageChange, MultiLanguage, } from "./MultiLanguage";
import { Endpoints, DtoCheckNewSocial_ID, DtoOnboarding, DtoCheckToken, DtoResendToken, } from "@app/Infra/Endpoints";

import {
  SetLanguageHTMLSelect,
  updateHTML,
  IsLoading,
  loadingOn,
  loadingOff,
  postPublicPortal,
  CheckPopUpCloseClick,
  displaySystemPopup,
  displaySystemPopupConfirm,
  mockServer,
} from "@app/Infra/Util";

import { timerFuncDec, timerFuncCleanup } from "@app/Components/Misc/ClockTimer";

import PasswordField from "@app/Components/Fields/Password";

import Form1 from "./Views/ViewRegister_1";
import Form2 from "./Views/ViewRegister_2";
import Form3 from "./Views/ViewRegister_3";
import Form4 from "./Views/ViewRegister_4";

function GetPageTags() {
  return {
    currentView: "currentView",
    form1: "form1",
    form2: "form2",
    form3: "form3",
    form4: "form4",
  };
}

function GetPageData() {
  return {
    socialID: "",
    nameID: "",
    emailID: "",
    emailToken: "",
  };
}

window.addEventListener("resize", (e) => { 
  var curWidth = window.innerWidth;
  var update = false;
  var lastRes = sessionStorage.getItem('res');
  if (lastRes != null && lastRes != undefined)
  {
    if (parseInt(lastRes) != curWidth)
      update = true;
  }
  else  
    update = true;
  if(update == true)
  {
    var tags = GetPageTags();
    var curView = sessionStorage.getItem(GetPageTags().currentView);   
    switch (curView) {
      case tags.form1: updateHTML("currentForm", Form1.getHtml()); Form1.maskUp(); break;
      case tags.form2: updateHTML("currentForm", Form2.getHtml()); break;
      case tags.form3: updateHTML("currentForm", Form3.getHtml()); Form3.maskUp(); break;
      case tags.form4: updateHTML("currentForm", Form4.getHtml()); break;
    }
  }    
  sessionStorage.setItem('res', curWidth);
});

export default class Controller{
  
  getHtml() {
    return "<div id='currentForm'></div>";
  }

  constructor(params) {

    $(document).ready(function () {
      var tags = GetPageTags();      
      GetNewHTML(tags.form1);      
      SetLanguageHTMLSelect();
      SavePageData(GetPageData());
      $("#" + Form1.elements().socialID)[0].focus();
    });

    $(document).on("change", "#languageSel", function () {
      if (MultiLanguageChange($("#languageSel").val()))
        setTimeout(() => {
          location.href = "/register";
        }, 10);
    });

    $(document).on("keydown", function (e) {
      var defs = GetPageTags();
      var _valParams = { focus: false, msg: false, fields: null };
      switch (e.keyCode) {
        case 9:
          switch (GetCurrentView()) {
            case defs.form1: Form1.validate(_valParams); break;
            case defs.form2: Form2.validate(_valParams); break;
            case defs.form3: Form3.validate(_valParams); break;
          }
          break;
        case 13:
          switch (GetCurrentView()) {
            case defs.form1: next_form1_Click(); break;
            case defs.form2: next_form2_Click(); break;
            case defs.form3: next_form3_Click(); break;
          }
          break;
        default: break;
      }
    });

    document.body.addEventListener("click", (e) => {
      if (CheckPopUpCloseClick(e)) return;
      var click_id = $(e.target).attr("id");
      var pageTags = GetPageTags();
      switch (GetCurrentView()) {
        case pageTags.form1:
          var elements = Form1.elements();
          switch (click_id) {
            case elements.btnNext: next_form1_Click(); break;
          }
          break;
        case pageTags.form2:
          var elements = Form2.elements();
          switch (click_id) {
            case elements.btnPrev: previous_form2_click(); break;
            case elements.btnNext: next_form2_Click(); break;
            case "seePass" + elements.passwordID: PasswordField.btnSeePassword(elements.passwordID); break;
            case "seePass" + elements.passwordConfID: PasswordField.btnSeePassword(elements.passwordConfID); break;
          }
          break;
        case pageTags.form3:
          var elements = Form3.elements();
          switch (click_id) {
            case elements.btnPrev: GetNewHTML(GetPageTags().form2); break;
            case elements.btnNext: next_form3_Click(); break;
            case elements._mdl_btn_confID: $("#" + elements._mdl_btn_confID).hide(); resendToken(); break;
          }
          break;
        default: break;
      }
    });

    function GetCurrentView() {
      return sessionStorage.getItem(GetPageTags().currentView);
    }

    function PushState(newState) {
      sessionStorage.setItem(GetPageTags().currentView, newState);
    }

    function GetCurrentPageData() {
      return JSON.parse(localStorage.getItem("currentPageData"));
    }

    function SavePageData(newPageData) {
      localStorage.setItem("currentPageData", JSON.stringify(newPageData));
    }

    function GetNewHTML(newState) {
      PushState(newState);
      var tags = GetPageTags();
      switch (newState) {
        case tags.form1: updateHTML("currentForm", Form1.getHtml()); Form1.maskUp(); break;
        case tags.form2: updateHTML("currentForm", Form2.getHtml()); break;
        case tags.form3: updateHTML("currentForm", Form3.getHtml()); Form3.maskUp(); break;
        case tags.form4: updateHTML("currentForm", Form4.getHtml()); break;
      }
    }

    // -------------------------------------------------------------------------
    // form1 functions ---------------------------------------------------------
    // -------------------------------------------------------------------------

    function next_form1_Click() {
      if (IsLoading()) return;
      if (!Form1.validate({ focus: false, msg: true, fields: null })) return;

      var elements = Form1.elements();
      var formData = DtoCheckNewSocial_ID(
        $("#" + elements.socialID).val(),
        getCurrentLanguage()
      );

      loadingOn("#" + elements.btnNext);

      if (sessionStorage["mock"])
        mockServer(JSON.stringify({ payload: true, obj: {} }));

      postPublicPortal(Endpoints().socialID, formData)
        .then((resp) => {
          if (resp.ok == true) next_form1_flow();
          else displaySystemPopup(MultiLanguage(5), resp.msg);
        })
        .catch((resp) => {
          displaySystemPopup(MultiLanguage(5), resp.msg);
        });
    }

    function next_form1_flow() {
      loadingOff();
      var pageData = GetCurrentPageData();
      var elements = Form1.elements();
      pageData.socialID = document.getElementById(elements.socialID).value;
      pageData.nameID = document.getElementById(elements.nameID).value;
      SavePageData(pageData);
      GetNewHTML(GetPageTags().form2);
    }

    // -------------------------------------------------------------------------
    // form2 functions ---------------------------------------------------------
    // -------------------------------------------------------------------------

    function previous_form2_click() {
      GetNewHTML(GetPageTags().form1);
      var pageData = GetCurrentPageData();
      var elements = Form1.elements();
      document.getElementById(elements.socialID).value = pageData.socialID;
      document.getElementById(elements.nameID).value = pageData.nameID;
    }

    function next_form2_Click() {
      if (IsLoading()) return;
      if (!Form2.validate({ focus: false, msg: true, fields: null })) return;

      var pageData = GetCurrentPageData();
      var elements = Form2.elements();

      pageData.emailID = document.getElementById(elements.emailID).value;

      SavePageData(pageData);

      var formData = DtoOnboarding(
        pageData.socialID,
        pageData.nameID,
        pageData.emailID,
        document.getElementById(elements.passwordID).value,
        getCurrentLanguage()
      );

      loadingOn("#" + elements.btnNext);

      if (sessionStorage["mock"])
        mockServer(JSON.stringify({ payload: true, obj: {} }));

      postPublicPortal(Endpoints().onboarding, formData)
        .then((resp) => {
          if (resp.ok == true) next_form2_flow();
          else displaySystemPopup(MultiLanguage(5), resp.msg);
        })
        .catch((resp) => {
          displaySystemPopup(MultiLanguage(5), resp.msg);
        });
    }

    function next_form2_flow() {
      loadingOff();
      GetNewHTML(GetPageTags().form3);
      var elements = Form3.elements();
      timerFuncCleanup(elements.timerID, 3 * 60);
      timerFuncDec(elements.timerID, endTime);
    }

    function endTime() {
      var elements = Form3.elements();
      displaySystemPopupConfirm(elements._mdl_confID, MultiLanguage(5), MultiLanguage(34));
    }

    function resendToken() {
      var pageData = GetCurrentPageData();

      var formData = DtoResendToken(
        pageData.socialID,
        getCurrentLanguage()
      );

      postPublicPortal(Endpoints().resendToken, formData)
        .then((resp) => {
          if (resp.ok == true) next_form2_flow();
          else displaySystemPopup(MultiLanguage(5), resp.msg);
        })
        .catch((resp) => {
          displaySystemPopup(MultiLanguage(5), resp.msg);
        });
    }

    // -------------------------------------------------------------------------
    // form3 functions ---------------------------------------------------------
    // -------------------------------------------------------------------------

    function next_form3_Click() {
      if (IsLoading()) return;
      if (!Form3.validate({ focus: false, msg: true, fields: null })) return;

      var pageData = GetCurrentPageData();
      var elements = Form3.elements();

      var formData = DtoCheckToken(
        pageData.socialID,
        document.getElementById(elements.tokenID).value,
        getCurrentLanguage()
      );

      loadingOn("#" + elements.btnNext);

      if (sessionStorage["mock"])
        mockServer("mockServer", JSON.stringify({ payload: true, obj: {} }));

      postPublicPortal(Endpoints().checkToken, formData)
        .then((resp) => {
          if (resp.ok == true) next_form3_flow();
          else displaySystemPopup(MultiLanguage(5), resp.msg);
        })
        .catch((resp) => {
          displaySystemPopup(MultiLanguage(5), resp.msg);
        });
    }

    function next_form3_flow() {
      loadingOff();
      GetNewHTML(GetPageTags().form4);
    }
  }
}
