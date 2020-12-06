
export class AppLanguage {

    constructor() {
        this.availableLanguages = [
            'English',
            'Español',
            'Português BR']

        this.langs = [
            // english (0)
            {
                labels: [
                    'Forgot your password?',/*0*/                   
                ]
            },
            // spanish (1)
            {
                labels: [
                    '¿Olvidaste tu contraseña?',/*0*/                    
                ]
            },
            // ptBr (2)
            {
                labels: [
                    'Esqueceu sua senha?',/*0*/                    
                ]
            },            
        ];
    }
}

export function getCurrentLanguage() {
    return localStorage.getItem('appLanguage')
}

export function MultiLanguageChange(index) {
    var curLanguage = localStorage.getItem('appLanguage');
    if (curLanguage != index - 1) {
        localStorage.setItem('appLanguage', index - 1)
        return true;
    }
    return false;
}

export function MultiLanguage(index) {
    
    var curLanguage = localStorage.getItem('appLanguage');
    if (curLanguage == undefined) {
        curLanguage = 2;
        // ptBR default
        localStorage.setItem('appLanguage', curLanguage)
    }
    curLanguage = parseInt(curLanguage)

    var appLang = new AppLanguage();
        
    return appLang.langs[curLanguage].labels[index];
}
