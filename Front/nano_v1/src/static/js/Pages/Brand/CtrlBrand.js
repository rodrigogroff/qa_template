
import { MultiLanguage, } from "./MultiLanguage";
import { Endpoints, DtoBrandListing } from "@app/Infra/Endpoints";

import {
  postPublicPortal,
  IsLoading,
  loadingOn,
  loadingOff,
  displaySystemPopup,
  CheckPopUpCloseClick,
  mockServer,
  updateHTML,
  isAuthenticated,
} from "@app/Infra/Util";

import {
  getDataTable
} from "@app/Components/Tables/DataTable";

import MyForm from "./Views/ViewBrand";

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
    updateHTML("mainFormApp", MyForm.getHtml()); 
  sessionStorage.setItem('res', curWidth);
});

export default class {

  getHtml() {
    return MyForm.getHtml();
  }

  constructor(params) {
    this.params = params;

    // events ---------------------------------------------------------------

    document.body.addEventListener("click", (e) => {
      if (CheckPopUpCloseClick(e)) return;
      var elements = MyForm.elements();
      switch ($(e.target).attr("id")) {
        case elements.btnSubmit: btnSubmit_Click(); break;
      }
    });

    $(document).ready(function () {      
      if (isAuthenticated() == null) {
        location.href = "/";
        return;
      }
    });

    function btnSubmit_Click() {
      if (IsLoading()) return;

      var formData = DtoBrandListing('',0, 20, 1);
      var elements = MyForm.elements();

      loadingOn("#" + elements.btnSubmit);

      if (sessionStorage["mock"])
        mockServer(
          JSON.stringify({
            payload: true,
            obj: {
              totalRecords: 2,
              results: [
                {
                  id: 1,
                  name: "aaaa",
                },
                {
                  id: 1,
                  name: "bbb",
                },
              ],
            },
          })
        );

      postPublicPortal(Endpoints().brandListing, formData)
        .then((resp) => {
          if (resp.ok == true) serviceOk(resp.payload);
          // output service data
          else displaySystemPopup(MultiLanguage(5), resp.msg);
        })
        .catch((resp) => {
          displaySystemPopup(MultiLanguage(5), resp.msg);
        });
    }

    function serviceOk(payload) {
      loadingOff();      

      var table = {
        'id': 'listTable',
        'header': ['ID', 'Brand Name'],
        'sizes': ['100px', '100px'],
        'data': []
      };

      for (let i = 0; i < payload.results.length; i++)
      {
        var res= payload.results[i];
        var arValues = [];
        arValues.push (res.id)
        arValues.push (res.name)
        table.data.push (arValues);
      }

      updateHTML('tableData', getDataTable (table));
    }
  }  
}
