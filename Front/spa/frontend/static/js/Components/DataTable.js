
import TableUtil from "../Infra/TableUtil.js"

export default class {

    constructor(table, textColor, backColor, type) {
        this.state = {
            table: table,
            textColor: textColor,
            backColor: backColor,
            type: type,
        };
    }

    getHtml() {

        if (this.state.table === null) return '';
            
        var injectTableHtml = new TableUtil (   this.state.table, 
                                                this.state.textColor, 
                                                this.state.backColor, 
                                                this.state.type).
                                                getHtml();

        var injectTableId = this.state.table.id;

        return `
            ${injectTableHtml}
            `;
    }
}