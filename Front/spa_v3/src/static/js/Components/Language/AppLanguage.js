
const availableLanguages = [ 'English', 'Español', 'Português BR', 'Português PT' ]

export default class {

    constructor()
    {
        this.langs = [
            // english (0)
            { 
                labels: [
                    'Forgot your password?',                // 0
                    'Login',                                // 1
                    'Not Registered?',                      // 2
                    'Sign Up',                              // 3
                    'Email',                                // 4
                    'Error',                                // 5
                    'Invalid Email',                        // 6
                    'Password',                             // 7
                    'See password',                         // 8
                    'Invalid password',                     // 9
                ]
            },
            // spanish (1)
            { 
                labels: [
                    '¿Olvidaste tu contraseña?', // 0
                     'Iniciar sesión', // 1
                     '¿No registrado?', // 2
                     'Registrarse', // 3
                     'Correo electrónico', // 4
                     'Error', // 5
                     'Correo electrónico no válido', // 6
                     'Contraseña', // 7
                     'Ver contraseña', // 8
                     'Contraseña no válida', // 9
                ]
            },
            // ptBr (2)
            { 
                labels: [
                    'Esqueceu sua senha?', // 0
                    'Login', // 1
                    'Não registrado?', // 2
                    'Inscreva-se', // 3
                    'Email', // 4
                    'Erro', // 5
                    'Email inválido', // 6
                    'Senha', // 7
                    'Ver senha', // 8
                    'Senha inválida', // 9
                ]
            },
            // ptPt (3)
            { 
                labels: [
                    'Esqueceu sua senha?', // 0
                     'Login', // 1
                     'Não registrado?', // 2
                     'Inscreva-se', // 3
                     'Email', // 4
                     'Erro', // 5
                     'Email inválido', // 6
                     'Senha', // 7
                     'Ver senha', // 8
                     'Senha inválida', // 9
                ]
            },            
        ];
    }
}
