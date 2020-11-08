
export default class {

    constructor(title, text, btnCloseLabel, modalId) {

        this.title = title;
        this.text = text;
        this.btnCloseLabel = btnCloseLabel;
        this.modalId = modalId;
    }

    getHtmlDanger() {

        var injectLabelTitle = this.title;
        var injectLabelText = this.text;
        var injectLabelbtnCloseLabel = this.btnCloseLabel;
        var idModal = this.modalId;
        var idLabelClose = this.modalId + "_close";        

        return `
            <div class="modal modal-state modal-state-danger fade" id="${idModal}" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body d-flex a-i-center j-c-center flex-direction-column">
                            <div class="modal-state-icon">
                                <i class="fas fa-times"></i>
                            </div>
                            <div class="modal-state-title">${injectLabelTitle}</div>
                            <div class="modal-state-text">
                                ${injectLabelText}
                            </div>
                            <button class="btn btn-danger btn-lg btn-w-md mb-20" id="${idLabelClose}" data-dismiss="modal">${injectLabelbtnCloseLabel}</button>
                        </div>
                    </div>
                </div>
            </div>           
            `;
    }

    getHtmlSuccess() {

        var injectLabelTitle = this.title;
        var injectLabelText = this.text;
        var injectLabelbtnCloseLabel = this.btnCloseLabel;
        var idModal = this.modalId;
        var idLabelClose = this.modalId + "_close";        

        return `
            <div class="modal modal-state modal-state-success fade" id="${idModal}" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body d-flex a-i-center j-c-center flex-direction-column">
                            <div class="modal-state-icon">
                                <i class="fas fa-check"></i>
                            </div>
                            <div class="modal-state-title">${injectLabelTitle}</div>
                            <div class="modal-state-text">
                                ${injectLabelText}
                            </div>
                            <button class="btn btn-success btn-lg btn-w-md mb-20" id="${idLabelClose}" data-dismiss="modal">${injectLabelbtnCloseLabel}</button>
                        </div>
                    </div>
                </div>
            </div>           
            `;
    }

    getHtmlWarning() {

        var injectLabelTitle = this.title;
        var injectLabelText = this.text;
        var injectLabelbtnCloseLabel = this.btnCloseLabel;
        var idModal = this.modalId;
        var idLabelClose = this.modalId + "_close";        

        return `
            <div class="modal modal-state modal-state-warning fade" id="${idModal}" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body d-flex a-i-center j-c-center flex-direction-column">
                            <div class="modal-state-icon">
                                <i class="fas fa-exclamation"></i>
                            </div>
                            <div class="modal-state-title">${injectLabelTitle}</div>
                            <div class="modal-state-text">
                                ${injectLabelText}
                            </div>
                            <button class="btn btn-warning btn-lg btn-w-md mb-20" id="${idLabelClose}" data-dismiss="modal">${injectLabelbtnCloseLabel}</button>
                        </div>
                    </div>
                </div>
            </div>           
            `;
    }

    getHtmlInfo() {

        var injectLabelTitle = this.title;
        var injectLabelText = this.text;
        var injectLabelbtnCloseLabel = this.btnCloseLabel;
        var idModal = this.modalId;
        var idLabelClose = this.modalId + "_close";        

        return `
            <div class="modal modal-state modal-state-info fade" id="${idModal}" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body d-flex a-i-center j-c-center flex-direction-column">
                            <div class="modal-state-icon">
                                <i class="fas fa-info"></i>
                            </div>
                            <div class="modal-state-title">${injectLabelTitle}</div>
                            <div class="modal-state-text">
                                ${injectLabelText}
                            </div>
                            <button class="btn btn-info btn-lg btn-w-md mb-20" id="${idLabelClose}" data-dismiss="modal">${injectLabelbtnCloseLabel}</button>
                        </div>
                    </div>
                </div>
            </div>           
            `;
    }
}
