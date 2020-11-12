
export default class {

    static loadAsync(id, url) {
        setTimeout(() => {
            $('#' + id).attr('src', url).on('load', function () {
                if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) { } else
                    $('#loading_img_' + id).css("display", "none");
            });
        }, 100);
    }

    static getHtml(id, style) {
        if (style==undefined) style='';
        else    
            style = "style='" + style + "'"            
        return `
            <img id='${id}' ${style} /><i class="fa fa-spinner fa-spin" id='loading_img_${id}' style="display:block;"></i>
            `;
    }
}
