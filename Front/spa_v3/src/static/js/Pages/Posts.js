
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

export default class extends MainCtrl {

    constructor(params) {
        super(params)
    }

    getHtml() {
        return  `
                <br>        
                <h1 style='color:white'> Posts Demo </h1>
                <br>
                <a href='/post/23' style='color:white'>Check post #23</a><br>
                <br>                
                `;
    }
}
