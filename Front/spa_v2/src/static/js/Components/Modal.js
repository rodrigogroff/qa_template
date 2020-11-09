
export default class {

    constructor(title, text, btnCloseLabel, btnSaveLabel, modalId) {

        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.btnCloseLabel = btnCloseLabel;
        this.btnSaveLabel = btnSaveLabel;
        this.modalId = modalId;
    }

    getHtml() {

        var injectLabelTitle = this.title;
        var injectLabelText = this.text;
        var injectLabelbtnCloseLabel = this.btnCloseLabel;
        var injectLabelbtnSaveLabel = this.btnSaveLabel;

        var idModal = this.modalId;
        var idLabelClose = this.modalId + "_close";
        var idLabelSave = this.modalId + "_save";

        return `
            <div class="popup-overlay" id="${idModal}">
                <div class="popup-container">
                    <div class="popup-header">
                        <h3 class="popup-title">${injectLabelTitle}</h3>
                        <span class="popup-close" data-dismiss="true"><i class="fa fa-times"></i></span>
                    </div>
                    <div class="popup-content">
                        ${injectLabelText}
                    </div>
                    <div class="popup-footer">
                        <button id="${idLabelClose}" data-dismiss="true" class="button">${injectLabelbtnCloseLabel}</button>    
                        <button id="${idLabelSave}" data-dismiss="true" class="button green">${injectLabelbtnSaveLabel}</button>                    
                    </div>
                </div>
            </div>
            `;
    }
}
