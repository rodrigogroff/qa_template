
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

export default class extends MainCtrl {

    constructor(params) {
        super(params)
    }

    getHtml() {
        return  MainCtrl.HtmlCleanup(`
                <br>        
                <h1> Posts Demo </h1>
                <br>
                <a href='/post/23'>Check post #23</a><br>
                <br>                
                `);
    }
}
