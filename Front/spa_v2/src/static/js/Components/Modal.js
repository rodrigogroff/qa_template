
export default class {

    constructor(title, subtitle, text, btnCloseLabel, btnSaveLabel, modalId) {

        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.btnCloseLabel = btnCloseLabel;
        this.btnSaveLabel = btnSaveLabel;
        this.modalId = modalId;
    }

    getHtml() {

        var injectLabelTitle = this.title;
        var injectLabelSubtitle = this.subtitle;
        var injectLabelText = this.text;
        var injectLabelbtnCloseLabel = this.btnCloseLabel;
        var injectLabelbtnSaveLabel = this.btnSaveLabel;

        var idModal = this.modalId;
        var idLabelClose = this.modalId + "_close";
        var idLabelSave = this.modalId + "_save";

        return `
            <div class="modal fade" id="${idModal}" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">${injectLabelTitle}</h4>
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${injectLabelSubtitle}</p>
                            <p class="text-light">${injectLabelText}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal" id="${idLabelClose}">${injectLabelbtnCloseLabel}</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="${idLabelSave}">${injectLabelbtnSaveLabel}</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
    }
}
