
// --------------------------------------------------
//  back and front end contracts / endpoints HERE
// --------------------------------------------------

export default class {

    constructor(params) {        
        this.params = params;        
        // endpoints urls
        this.authenticate = 'authenticate_v1'
    }

    authenticate_Input(email, password) {
        return {
            email: email,
            password: password
        }
    }

    authenticate_Output(payload) {
        return {
            token: payload.token,
            user: {
                email: payload.user.email,
                login: payload.user.login,
            }
        }
    }
}
