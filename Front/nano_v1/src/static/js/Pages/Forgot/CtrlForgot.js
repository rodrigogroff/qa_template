import {
  getCurrentLanguage,
  MultiLanguage,
  MultiLanguageChange,
} from "./language";

import { Endpoints, DtoPasswordRecovery } from "@app/Infra/Endpoints";

import {
  postPublicPortal,
  SetLanguageHTMLSelect,
  IsLoading,
  loadingOn,
  CheckPopUpCloseClick,
  displaySystemPopup,
  mockServer,
  updateHTML,
  displaySystemSuccess,
} from "@app/Infra/Util";

import MyForm from "./Views/ViewForgot";

window.addEventListener("resize", (e) => { updateHTML("mainFormApp", MyForm.getHtml()); });

export default class {
  constructor(params) {
    this.params = params;

    // events ---------------------------------------------------------------

    $(document).ready(function () {
      SetLanguageHTMLSelect();
      MyForm.focus();
    });

    $(document).on("keydown", function (e) {
      switch (e.keyCode) {
        case 9:
          MyForm.validate({ focus: false, msg: false, fields: null });
          break;
        case 13:
          btnSubmit_Click();
          break;
      }
    });

    $(document).on("change", "#languageSel", function () {
      if (MultiLanguageChange($("#languageSel").val()))
        setTimeout(() => {
          location.href = "/forgot";
        }, 100);
    });

    document.body.addEventListener("click", (e) => {
      if (CheckPopUpCloseClick(e)) return;
      var elements = MyForm.elements();
      switch ($(e.target).attr("id")) {
        case elements.btnSubmit:
          btnSubmit_Click();
          break;
      }
    });

    function btnSubmit_Click() {
      if (IsLoading()) return;
      var elements = MyForm.elements();
      var formData = DtoPasswordRecovery(
        document.getElementById(elements.formMail).value.trim(),
        getCurrentLanguage()
      );

      if (!MyForm.validate({ focus: false, msg: true, fields: formData }))
        return;

      loadingOn("#" + elements.btnSubmit);

      if (sessionStorage["mock"])
        mockServer(JSON.stringify({ payload: true, obj: {} }));

      postPublicPortal(Endpoints().passwordRecovery, formData)
        .then((resp) => {
          if (resp.ok == true) serviceOK();
          // output service data
          else displaySystemPopup(MultiLanguage(5), resp.msg);
        })
        .catch((resp) => {
          displaySystemPopup(MultiLanguage(5), resp.msg);
        });
    }

    function serviceOK() {
      var _title = MultiLanguage(7);
      var _msg = MultiLanguage(8);
      displaySystemSuccess(_title, _msg);
    }
  }

  getHtml() {
    return MyForm.getHtml();
  }
}
