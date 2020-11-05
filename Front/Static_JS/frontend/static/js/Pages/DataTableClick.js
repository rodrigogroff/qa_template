
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
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

        return `
            ${new MenuAdvanced().getHtml()}
            <div align='center'>
                <div style='width:900px'>
                    ${new TitleForm().getHtml("Data Table Click Sample")}                                  
                    <br>
                    ${new DataTableClick(table, 'white', 'grey', 'table table-hover').getHtml()}
                    <br>
                    <br>
                </div>
            </div>
        `;
    }
}