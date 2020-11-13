
//Infrastructure
import MainCtrl from "../../Infra/MainCtrl"
import AppLanguage from "./AppLanguage"

export default class {
    
    static getHtml() {
        var availableLanguages = '';
        var langs = new AppLanguage().availableLanguages
        for (let i=0; i < langs.length; ++i) 
            availableLanguages += "<option value='" + ( i + 1 ).toString() + "'>" + langs[i] + "</option>"
        return MainCtrl.HtmlCleanup(`
            <select class="form-element" id='languageSel'>
                ${availableLanguages}
            </select>
            `);
    }
}
