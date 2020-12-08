export function buildTable2TD(html1, html2, id) {
  return `<table align='center'><tr><td id='${id}' valign='middle'>${html1}</td><td valign='middle'>${html2}</td></tr></table>`;
}

export function buildTable2TDEqual(html1, html2, id) {
  return `<table align='center' width='100%'><tr><td width='50%' id='${id}' valign='middle'>${html1}</td><td valign='middle'>${html2}</td></tr></table>`;
}

export function BaseLoader(id, _style) {
  if (id == undefined) id = "loading";
  if (_style == undefined) _style = "display:none;";
  return `<span class="loadingio-spinner-spinner-z7v4g50j1x" id='loading' style="display:none;padding-top:3px">
    <div class="ldio-hqohp5x0gi"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
</span>`;
}
