
import { buildTable } from '@app/Infra/Util'

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
        return `${buildTable(this.state.table, this.state.textColor, this.state.backColor, this.state.type)}`;
    }
}