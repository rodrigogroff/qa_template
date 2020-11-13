
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

//Components
import DataTableClick from "../Components/DataTableClick";
import DataTablePagination from "../Components/DataTablePagination";

export default class extends MainCtrl {

    getHtml() {
        return `
                DataTable PaginationDemo
                <div id='data'></div>
                <br>
                <br>
                `;
    }

    constructor(params) {
        super(params)

        $(document).ready(function () {

            sessionStorage.setItem("totItens_reportName", 263);
            setPage(263, 10, 5);

            $(document).bind('click', function (e) {
                var totItens = sessionStorage.getItem("totItens_reportName")
                if (e != undefined)
                    if (e.target != undefined)
                        if (e.target.attributes != undefined) {
                            if (e.target.attributes._page != undefined) {
                                if (e.target.attributes._page.value != undefined)
                                    setPage(parseInt(totItens), 10, parseInt(e.target.attributes._page.value))
                            }
                            else if (e.target.attributes._par_table != undefined) {
                                if (e.target.attributes._par_table.value == 'menuTable')
                                    alert(e.target.attributes.id.value);
                            }
                        }
            })
        });

        function setPage(totItens, itensPerPage, currentPage) {
            MainCtrl.loadingOn();
            
            setTimeout(() => {

                MainCtrl.loadingOff();
                var table = {
                    'id': 'menuTable',
                    'header': ['Name', 'Cell Phone'],
                    'sizes': ['90px', '90px'],
                    'data': []
                };

                // mock!
                var start = (currentPage - 1) * itensPerPage + 1;
                var end = start + itensPerPage;
                while (true) {
                    var row = [];
                    row.push('Alfred ' + start)
                    row.push('555-5451')
                    table.data.push(row);
                    start++;
                    if (start >= totItens) break;
                    if (start >= end) break;
                }

                $("#data").html(
                    MainCtrl.HtmlCleanup(`
                        <div align='center' width='600px'>
                            ${new DataTablePagination(totItens, itensPerPage, currentPage).getHtml()}
                            <div style="width:296px" class="form-row-group-dark">
                                <br>
                                ${new DataTableClick(table).getHtml()}
                                <br>
                            </div>
                        </div>
                        <br>
                        `));
            }, 500);
        }
    }
}
