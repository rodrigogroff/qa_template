
import FetchCtrl from "../Infra/FetchCtrl.js"

export default class {

    constructor(x) {

        $(document).ready(function () {            
            var f = new FetchCtrl();
            f.setToStorage('timer' + x, 0 )
            updateTimer();
        });

        function updateTimer()
        {
            var f = new FetchCtrl();
            var index = parseInt(f.getFromStorage('timer' + x)) + 1;
            $('#timer').text("Timer: " + index.toString());
            f.setToStorage('timer'+ x, index)
            setTimeout(() => updateTimer(), 1000);
        }
    }

    getHtml(p) {
        return `
        <p id='timer'></p>        
        `;
    }
}