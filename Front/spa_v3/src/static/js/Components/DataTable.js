
//Infrastructure
import BaseCtrl from "../Infra/BaseCtrl"
import TableUtil from "../Infra/TableUtil"

export default class extends BaseCtrl {

    constructor(table, textColor, backColor, type) {
        this.state = {
            table: table,
            textColor: textColor,
            backColor: backColor,
            type: type,
        };
    }

    static getHtml() {
        if (this.state.table === null) 
            return '';
        return this.HtmlCleanup(`
            ${new TableUtil (   this.state.table, 
                this.state.textColor, 
                this.state.backColor, 
                this.state.type).
                getHtml()}
            `);
    }
}