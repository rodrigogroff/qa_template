
export default class {

    constructor(params) {        
        this.params = params;
        
        this.authenticate = 'authenticate_v1'
    }

    // ---------------------------
    // contracts
    // ---------------------------

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
