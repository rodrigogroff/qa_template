
// -----------------------------------------------
// This is the main base class for the SPA pages
// All base functions / utils HERE
// avoid allocation and multiple instancing
// -----------------------------------------------

export default class {
    
    constructor(params) {        
        this.params = params;
    }

    getHtml() {
        return "";
    }

    static HtmlCleanup(str) {
        return str.split(/\>[\n\t\s]*\</g).join('><').split(/[\n\t]*/gm).join('')
    }

    static getFromStorage(tag) {
        return localStorage.getItem(tag);
    }

    static setToStorage(tag, val) {
        localStorage.setItem(tag, val)
    }

    static IsLoading() {
        return $('#loading').is(":visible");
    }

    static loadingOn(btn) {
        $('#loading').show();
        if (btn != undefined) {
            $(btn).removeClass('green')
            $(btn).addClass('light')
            this.setToSession('myBtn', btn)
        }
    }

    static displaySystemPopup(title, text) {
        if (this.IsLoading())
            this.loadingOff(this.getFromSession('myBtn'));
        $('#popUpSystem').fadeIn('fast');
        $('#popUpSystemTitle').text(title)
        $('#popUpSystemText').text(text)
    }

    static errorField(id) {
        $(id).attr('style', 'color:red');
    }

    static errorClean(id) {
        $(id).attr('style', '');
    }

    static loadingOff(btn) {
        $('#loading').hide();
        if (btn != undefined)
            $(btn).addClass('green')
    }

    static updateHTML(idElement, html) {
        document.querySelector(idElement).innerHTML = html;
    }

    static disableButton(btn){
        $(btn).prop('disabled', true);
    }

    static enableButton(btn){
        $(btn).prop('disabled', false);
    }

    static getFromSession(tag) {
        return sessionStorage.getItem(tag);
    }

    static setToSession(tag, val) {
        sessionStorage.setItem(tag, val)        
    }

    static isAuthenticated() {
        return localStorage.getItem('token');
    }

    static isFieldContentValid(val, maxLength, fieldType, minlength ) {

        if (fieldType == undefined) fieldType = 'text';
        if (maxLength == undefined) maxLength = 20;
        if (minlength == undefined) minlength = 4;
        if (fieldType == 'email') maxLength = 99;

        if (val === null) return false;
        if (val === undefined) return false;
        if (val === "") return false;

        var len = val.trim().length;

        if (len === 0) return false;
        if (len > maxLength) return false;
        if (len < minlength) return false;

        switch (fieldType)
        {
            case 'email':
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(String(val).toLowerCase()))
                    return false;
                break;

            case 'name':
                if (len.length < 3)
                return false;
                var reN = /^\d$/;
                for (let i=0; i < val.length; i++) {
                    let n = val[i];
                    if (reN.test(c)) {
                        return false;
                    }
                }
                break;

            case 'fullName':
                if (val.trim().indexOf(' ') < 0)
                    return false;

                break;

            case 'password':
                break;
        }

        return true;
    }

    static cleanLogin() {
        localStorage.setItem('token', null)
        localStorage.setItem('email', null)
        localStorage.setItem('user_name', null)
    }

    static loginOk(token, email, userName) {
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        localStorage.setItem('user_name', userName)
    }
}
