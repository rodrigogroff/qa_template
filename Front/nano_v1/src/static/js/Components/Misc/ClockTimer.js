
export function timerFuncCleanup(id, startVal) {
  var tag = 'timer_token' + id;
  sessionStorage.setItem(tag, startVal)
}

export function timerFuncDec(id, callBackTimerFunc) {
  var tag = 'timer_token' + id;
  var timerToken = parseInt(sessionStorage.getItem(tag));
  var tField = document.getElementById(id);
  if (tField == undefined || tField == null) return;
  tField.innerText = new Date(timerToken * 1000).toISOString().substr(11, 8);
  timerToken--;
  sessionStorage.setItem(tag, timerToken);
  if (timerToken != 0) {
    setTimeout(() => {
      timerFuncDec(id, callBackTimerFunc)
    }, 1000);
  }
  else
    callBackTimerFunc();
}

