
export default class {

    constructor(id, text) {
        this.id = id;
        this.text = text;            
    }

    getHtml() {

        var injectLabelID = this.id;
        var injectLabelText = this.text;

        return `
        <p id='${injectLabelID}'>${injectLabelText}</p>
        `;
    }
}