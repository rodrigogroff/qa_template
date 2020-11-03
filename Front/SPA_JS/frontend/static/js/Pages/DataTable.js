
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
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
        var injectDataTable = new DataTable(table, 'white', 'blue', 'table table-hover').getHtml();

        return `
            ${injectMenu}    
            <div align='center'>
                <div style='width:900px'>
                    <br>
                    <h1>Data Table - Sample</h1>                    
                    <br>
                    ${injectDataTable}
                </div>
            </div>
        `;
    }
}