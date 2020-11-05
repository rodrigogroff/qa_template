
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
import MenuAdvanced from "../Components/MenuAdvanced.js";
import DataTable from "../Components/DataTable.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
    }

    getHtml() {

        var table = {
            'id': 'menuTable',
            'header': ['Name', 'Cell Phone'],
            'sizes': ['90px', '90px'],
            'data': []
        };
        
        for (let i=0; i < 10; i++)
        {
            var row = [];        
            row.push('Alfred '+ i)
            row.push('555-545' + i)        
            table.data.push(row);
        }

        var injectMenu = new MenuAdvanced().getHtml();

        return `
            ${injectMenu}    
            <div align='center'>
                <div style='width:900px'>
                    ${new TitleForm().getHtml("Data Table Sample")}
                    <br>
                    ${new DataTable(table, 'white', 'grey', 'table table-hover').getHtml()}
                    <br>
                    <br>
                </div>
            </div>
        `;
    }
}