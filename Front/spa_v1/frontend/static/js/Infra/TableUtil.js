
export default class {

    constructor(tableobj, color, bgColor, styleClass) 
    {
        this.lineData = '';

        if (tableobj.data.length > 0) {
            var size = tableobj.header.length;
            var lineData = "<table class='" + styleClass + "' id='" + tableobj.id + "'><thead style='background-color:" + bgColor + "';'> <tr>";
            for (var h = 0; h < size; ++h)
                lineData += "<th style='color:" + color + "' width='" + tableobj.sizes[h] + "'>" + tableobj.header[h] + '</th > ';
            lineData += "</tr></thead><tbody>";
            for (var d = 0; d < tableobj.data.length; ++d) {
                var ar = tableobj.data[d];
                lineData += "<tr>";
                for (var h = 0; h < size; ++h)
                    lineData += "<td id='" + d + "' _par_table='" +  tableobj.id  + "'>" + ar[h] + "</td>";
                lineData += "</tr>";
            }
            lineData += "</tbody></table>";
            this.lineData = lineData;
        }
        else {
            this.lineData = "<br><button class='btn btn-dark btn-lg'>No results were found</button><br>";
        }    
    }

    getHtml() {
        return this.lineData;
    }

}