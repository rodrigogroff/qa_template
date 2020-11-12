
import MainCtrl from "../Infra/MainCtrl"
import TableUtil from "../Infra/TableUtil"

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
        if (this.state.table === null) 
            return '';
        return MainCtrl.HtmlCleanup(`
            ${new TableUtil (   this.state.table, 
                this.state.textColor, 
                this.state.backColor, 
                this.state.type).
                getHtml()}
            `);
    }
}