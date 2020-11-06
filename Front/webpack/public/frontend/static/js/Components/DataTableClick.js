
import TableUtil from "../Infra/TableUtil.js"

export default class {

    constructor(table, textColor, backColor, styleClass) {
        
        this.state = {
            table: table,
            textColor: textColor,
            backColor: backColor,
            styleClass: styleClass,
        };

        if (this.state.textColor == undefined) 
            this.state.textColor = 'white';

        if (this.state.backColor == undefined) 
            this.state.backColor = 'grey';

        if (this.state.styleClass == undefined) 
            this.state.styleClass = 'table table-hover';

        $(document).bind('click', function (e) 
        {
            $("row").trigger('click');                      
        });
    }

    getHtml() {

        if (this.state.table === null) return '';
            
        var injectTableHtml = new TableUtil (   this.state.table, 
                                                this.state.textColor, 
                                                this.state.backColor, 
                                                this.state.styleClass).
                                                getHtml();

        var injectTableId = this.state.table.id;

        return `
            ${injectTableHtml}
            `;
    }
}