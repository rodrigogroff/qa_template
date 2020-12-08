export class AppLanguage {
  constructor() {
    this.availableLanguages = ["English", "Español", "Português BR"];

    this.langs = [
      // english (0)
      {
        labels: [
          "Email" /*0*/,
          "Error" /*1*/,
          "Invalid email!" /*2*/,
          "Language" /*3*/,
          "Please inform a valid registered email to receive your last password" /*4*/,
          "Send" /*5*/,
          "Password Recovery" /*6*/,
          "Success" /*7*/,
          "Email Sent!" /*8*/,
        ],
      },
      // spanish (1)
      {
        labels: [
          "Correo electrónico" /*0*/,
          "Error" /*1*/,
          "Correo electrónico no válido" /*2*/,
          "Idioma" /*3*/,
          "Por favor, informe un correo electrónico registrado válido para recibir su última contraseña" /*4*/,
          "Enviar" /*5*/,
          "Recuperación de contraseña" /*6*/,
          "Éxito" /*7*/,
          "¡Correo electrónico enviado!" /*8*/,
        ],
      },
      // ptBr (2)
      {
        labels: [
          "Email" /*0*/,
          "Erro" /*1*/,
          "Email inválido" /*2*/,
          "Idioma" /*3*/,
          "Por favor, informe um email cadastrado válido para receber sua última senha" /*4*/,
          "Enviar" /*5*/,
          "Recuperação de senha" /*6*/,
          "Sucesso" /*7*/,
          "Email enviado!" /*8*/,
        ],
      },
    ];
  }
}

export function getCurrentLanguage() {
  return localStorage.getItem("appLanguage");
}

export function MultiLanguageChange(index) {
  var curLanguage = localStorage.getItem("appLanguage");
  if (curLanguage != index - 1) {
    localStorage.setItem("appLanguage", index - 1);
    return true;
  }
  return false;
}

export function MultiLanguage(index) {
  var curLanguage = localStorage.getItem("appLanguage");
  if (curLanguage == undefined) {
    curLanguage = 2;
    // ptBR default
    localStorage.setItem("appLanguage", curLanguage);
  }
  curLanguage = parseInt(curLanguage);

  var appLang = new AppLanguage();

  return appLang.langs[curLanguage].labels[index];
}
