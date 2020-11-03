
export default class {

    constructor(id) {
        this.id = id;
        $(document).bind('click', function (e) 
        {
            switch ($(e.target).attr('id')) {
                case this.id:                 
                    $(this.id).trigger('click');
                break;                
            }
        });
    }

    getHtml() {
        var injectID = this.id;
        return `
        <button class='btn btn-primary btn-round btn-md' id='${injectID}'>Emit</button><br>
        `;
    }
}