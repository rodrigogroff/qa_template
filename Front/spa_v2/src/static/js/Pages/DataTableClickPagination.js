
//Infrastructure
import MainCtrl from "../Infra/MainCtrl.js"

//Components
import DataTableClick from "../Components/DataTableClick.js";
import DataTablePagination from "../Components/DataTablePagination.js";

export default class extends MainCtrl {

    constructor(params) {
        super(params)
        
        $(document).ready(function () 
        {
            load();

            $(document).bind('click', function (e) {

                var totItens = sessionStorage.getItem("totItens_reportName")

                if (e != undefined)
                    if (e.target != undefined)
                        if (e.target.attributes != undefined)
                        {
                            if (e.target.attributes._page != undefined)
                            {
                                if (e.target.attributes._page.value != undefined)
                                    setPage( parseInt(totItens), 10, parseInt(e.target.attributes._page.value))
                            }
                            else if (e.target.attributes._par_table != undefined)
                            {
                                if (e.target.attributes._par_table.value == 'menuTable')
                                    alert (e.target.attributes.id.value);
                            }
                        }
            })
        });

        function load()
        {
            // ----------------------
            // process here
            // --------------------

            sessionStorage.setItem("totItens_reportName", 263);
            
            setPage(263,10,5);
        }

        function setPage(totItens, itensPerPage, currentPage)
        {            
            $("#loading").show();

            setTimeout(() => {

                $("#loading").hide();

                var table = {
                    'id': 'menuTable',
                    'header': ['Name', 'Cell Phone'],
                    'sizes': ['90px', '90px'],
                    'data': []
                };

                // mock!
                var start = (currentPage - 1) * itensPerPage + 1;
                var end = start + itensPerPage;
                while (true)
                {
                    var row = [];
                    row.push('Alfred ' + start)
                    row.push('555-5451')
                    table.data.push(row);
                    start++;
                    if (start >= totItens) break;
                    if (start >= end) break;
                }

                var injectTable = new DataTableClick(table).getHtml(); 
                var injectPagination = new DataTablePagination(totItens,itensPerPage,currentPage).getHtml(); 
                
                var result = `
                            ${injectPagination}
                            ${injectTable}
                            <br>                            
                            `;

                $("#data").html( result );
                
            }, 500);            
        }
    }

    getHtml() {
        return  `
                    DataTable PaginationDemo
                    <div id='data'></div>
                    <br>
                    <br>
            `;
    }
}
