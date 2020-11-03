
export default class {

    constructor() {
    }

    getHtml() {
        return `
            <div align="center" style="min-height:30px;">
                <div class="loader-ring" id="loading" style="display:none;height:20px">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        `;
    }
}
