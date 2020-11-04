
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

    isAuthenticated() {
        return localStorage.getItem('token');
    }

    isFieldContentValid(val) {

        if (val === null) return false;
        if (val === undefined) return false;
        if (val.length === 0) return false;

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
