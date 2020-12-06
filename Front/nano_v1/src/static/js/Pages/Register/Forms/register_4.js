
import { MultiLanguage } from '../language'

export default class {

    static elements() {
        return {
            btnLogin: 'btnLogin',            
        };
    }

    static getHtml() {
        var elements = this.elements();

        var registerMsg = MultiLanguage(3);
        var stepMsg = MultiLanguage(17);
        var title = MultiLanguage(31);
        var info = MultiLanguage(32);
        var login = MultiLanguage(14);
        
        return `<div style="width:296px;" class="form-row-group-dark">
                    <div style='min-height:355px'>
                        <table><tr><td><h3><b>${registerMsg}</b></h3></td><td width='20px'></td><td><h4 style='color:#009E96'>${stepMsg} 4/4</h4></td></tr></table>
                        <div class="form-row-group" align="left" id='registerIdForm'>
                            <br>
                            <p style='padding-left:20px'><b>${title}</b></p>
                            <br>
                            <img src='src/static/img/email.png' alt=' ' style='width:60;height:60px' />
                            <br>
                            <p style='padding-left:20px'>${info}</p>
                            <br>
                        </div>
                        <br>
                    </div>
                    <a id="${elements.btnLogin}" href='/login' class="button circle block green">${login}</a>
                    <br>
                    <br>
                </div>`;
    }    
}
