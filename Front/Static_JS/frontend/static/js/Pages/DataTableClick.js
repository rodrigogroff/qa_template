
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";
import DataTableClick from "../Components/DataTableClick.js";

export default class extends AbstractView {

    constructor(params) {
        super(params);

        $(document).ready(function () {
            $(document).bind('click', function (e) {
                if (e != undefined)
                    if (e.target != undefined)
                        if (e.target.attributes != undefined)
                            if (e.target.attributes._par_table != undefined)
                                if (e.target.attributes._par_table.value != undefined)
                                    if (e.target.attributes._par_table.value == 'menuTable')
                                        alert(e.target.id);                                 
            })
        });
    }

    getHtml() {

        var table = {
            'id': 'menuTable',
            'header': ['Name', 'Cell Phone'],
            'sizes': ['90px', '90px'],
            'data': []
        };

        for (let i = 1; i <= 10; i++) {
            var row = [];
            row.push('Alfred ' + i)
            row.push('555-545' + i)
            table.data.push(row);
        }

        var injectMenu = new MenuAdvanced().getHtml();
        var injectDataTable = new DataTableClick(table, 'white', 'blue', 'table table-hover').getHtml();

        return `
            ${injectMenu}    
            <div align='center'>
                <div style='width:900px'>
                    <br>
                    <h1>Data Table Click - Sample</h1>                    
                    <br>
                    ${injectDataTable}
                </div>
            </div>
        `;
    }
}