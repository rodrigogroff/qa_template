
// -----------------------------------------------
// This is the main base class for the SPA pages
// All base functions / utils HERE
// avoid allocation and multiple instancing
// -----------------------------------------------

export default class {
    
    constructor(params) {        
        this.params = params;
    }

    static HtmlCleanup(str) {
        return str.split(/\>[\n\t\s]*\</g).join('><').split(/[\n\t]*/gm).join('')
    }

}
