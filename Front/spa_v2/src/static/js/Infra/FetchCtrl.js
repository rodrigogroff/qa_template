
const ApiLocation = {
    api_host: 'http://localhost',
    api_port: '18524',
    api_portal: '/api/',
}

export default class FetchCtrl {

    getFromStorage(tag) {
        return localStorage.getItem(tag);
    }

    setToStorage(tag, val) {
        localStorage.setItem(tag, val)
    }

    loadingOn() {
        $('.sweet-loader').show().addClass('show');
    }

    displaySystemPopup(title, text) {
        $('#popUpSystem').fadeIn('fast');
        $('#popUpSystemTitle').text(title)
        $('#popUpSystemText').text(text)
    }

    errorField(id) {
        $(id).attr('style', 'color:red');
    }

    errorClean(id) {
        $(id).attr('style', '');
    }

    loadingOff() {
        $('.sweet-loader').show().removeClass('show');
    }

    updateHTML(idElement, html) {
        document.querySelector(idElement).innerHTML = html;
    }

    disableButton(btn){
        $(btn).prop('disabled', true);
    }

    enableButton(btn){
        $(btn).prop('disabled', false);
    }

    getFromSession(tag) {
        return sessionStorage.getItem(tag);
    }

    setToSession(tag, val) {
        sessionStorage.setItem(tag, val)        
    }

    isAuthenticated() {
        return localStorage.getItem('token');
    }

    isFieldContentValid(val, maxLength, fieldType, minlength ) {

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

                if (val.length < minlength)
                    return false;

                break;
        }

        return true;
    }

    cleanLogin() {
        localStorage.setItem('token', null)
        localStorage.setItem('email', null)
        localStorage.setItem('user_name', null)
    }

    loginOk(token, email, userName) {
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        localStorage.setItem('user_name', userName)
    }
    
    getTokenPortal(location, parameters) {
        var attempts = 5;
        var _catch = false;
        while (true) {
            var ret = new Promise((resolve, reject) => {
                var _params = '';
                if (parameters !== null)
                    _params = '?' + parameters;
                fetch(ApiLocation.api_host + ':' + ApiLocation.api_port + ApiLocation.api_portal + location + _params,
                    {
                        method: 'GET', headers:
                        {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        }
                    })
                    .then((res) => {
                        if (res.status === 401) {
                            resolve({
                                ok: false,
                                unauthorized: true
                            })
                        }
                        else if (res.status === 400) {
                            res.json().then((data) => {
                                reject({
                                    ok: false,
                                    msg: data.message
                                })
                            });
                        }
                        else if (res.ok === true) {
                            res.json().then((data) => {
                                resolve({
                                    ok: true,
                                    payload: data,
                                })
                            })
                        }
                        else res.json().then((data) => {
                            console.log(data)
                            resolve({
                                ok: false,
                                msg: data.message,
                            })
                        });
                    })
                    .catch((errorMsg) => {
                        _catch = true;
                        resolve({
                            ok: false,
                            msg: errorMsg.message,
                        })
                    });
            })
            if (_catch === true) {
                --attempts;
                if (attempts === 0)
                    return ret;
            }
            else
                return ret;
        }
    }

    postTokenPortal(location, data) {
        var attempts = 5;
        var _catch = false;
        while (true) {
            var ret =
                new Promise((resolve, reject) => {
                    fetch(ApiLocation.api_host + ':' + ApiLocation.api_port +
                        ApiLocation.api_portal + location,
                        {
                            method: 'POST', headers:
                            {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                            },
                            body: data
                        })
                        .then((res) => {
                            if (res.status === 401) {
                                reject({
                                    ok: false,
                                    unauthorized: true
                                })
                            }
                            else if (res.status === 400) {
                                res.json().then((data) => {
                                    reject({
                                        ok: false,
                                        msg: data.message
                                    })
                                });
                            }
                            else if (res.ok === true) {
                                res.json().then((data) => {
                                    resolve({
                                        ok: true,
                                        payload: data,
                                    })
                                })
                            }
                            else res.json().then((data) => {
                                resolve({
                                    ok: false,
                                    msg: data.message,
                                })
                            });
                        })
                        .catch((errorMsg) => {
                            _catch = true;
                            resolve({
                                ok: false,
                                msg: errorMsg.toString(),
                            })
                        });
                })
            if (_catch === true) {
                --attempts;
                if (attempts === 0)
                    return ret;
            }
            else
                return ret;
        }
    }

    postPublicPortal(obj, endPoint) {
        var attempts = 5;
        var _catch = false;
        while (true) {
            var ret = new Promise((resolve, reject) => {
                fetch(ApiLocation.api_host + ':' + ApiLocation.api_port + ApiLocation.api_portal + endPoint,
                    {
                        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: obj
                    })
                    .then((res) => {
                        if (res.status === 400) {
                            res.json().then((data) => {
                                reject({
                                    ok: false,
                                    msg: data.message
                                })
                            });
                        }
                        else if (res.ok === true) {
                            res.json().then((data) => {
                                resolve({
                                    ok: true,
                                    payload: data,
                                })
                            })
                        }
                        else {
                            res.json().then((data) => {
                                resolve({
                                    ok: false,
                                    msg: data.message,
                                })
                            })
                        }
                    })
                    .catch((errorMsg) => {
                        _catch = true;
                        resolve({
                            ok: false,
                            msg: errorMsg.toString(),
                        })
                    });
            })
            if (_catch === true) {
                --attempts;
                if (attempts === 0)
                    return ret;
            }
            else
                return ret;
        }
    }

}
