export class AppLanguage {
  constructor() {
    this.availableLanguages = ["English", "Español", "Português BR"];

    this.langs = [
      // english (0)
      {
        labels: [
          "Forgot your password?" /*0*/,
          "Login" /*1*/,
          "Not registered?" /*2*/,
          "Sign up!" /*3*/,
          "Email" /*4*/,
          "Error" /*5*/,
          "Invalid email!" /*6*/,
          "Desired Password" /*7*/,
          "See password" /*8*/,
          "Invalid password" /*9*/,
          "Language" /*10*/,
          "Keep me logged in" /*11*/,
          "Dashboard" /*12*/,
          "User" /*13*/,
          "Login" /*14*/,
          "Register" /*15*/,
          "Next" /*16*/,
          "Step" /*17*/,
          "Inform your social ID" /*18*/,
          "Social ID" /*19*/,
          "Inform your full Name" /*20*/,
          "Your full name" /*21*/,
          "Previous" /*22*/,
          "Inform your email" /*23*/,
          "Confirmation" /*24*/,
          "Invalid social ID!" /*25*/,
          "Invalid name!" /*26*/,
          "Numeric Code" /*27*/,
          "Enter your code sent by email" /*28*/,
          "Invalid number!" /*29*/,
          "Please inform a valid registered email to receive your last password" /*30*/,
          "Congratulations!" /*31*/,
          "Your registration is complete, please login with the button below." /*32*/,
          "Resend Token" /*33*/,
          "Your Token has expired. Please use the button below to send the token again." /*34*/,
        ],
      },
      // spanish (1)
      {
        labels: [
          "¿Olvidaste tu contraseña?" /*0*/,
          "Iniciar sesión" /*1*/,
          "¿No registrado?" /*2*/,
          "Registrarse!" /*3*/,
          "Correo electrónico" /*4*/,
          "Error" /*5*/,
          "Correo electrónico no válido" /*6*/,
          "Contraseña deseada" /*7*/,
          "Ver contraseña" /*8*/,
          "Contraseña no válida" /*9*/,
          "Idioma" /*10*/,
          "Mantenerme conectado" /*11*/,
          "Panel de control" /*12*/,
          "Usuario" /*13*/,
          "Iniciar sesión" /*14*/,
          "Registrarse" /*15*/,
          "Siguiente" /*16*/,
          "Paso" /*17*/,
          "Informe su identificación" /*18*/,
          "Identificación social" /*19*/,
          "Informe su nombre completo" /*20*/,
          "Su nombre completo" /*21*/,
          "Previo" /*22*/,
          "Informe su correo electrónico" /*23*/,
          "Confirmación" /*24*/,
          "¡ID social no válido!" /*25*/,
          "¡Nombre no válido!" /*26*/,
          "Código numérico" /*27*/,
          "Ingrese su código enviado por correo electrónico" /*28*/,
          "Invalid number!" /*29*/,
          "Por favor, informe un correo electrónico registrado válido para recibir su última contraseña" /*30*/,
          "¡Felicitaciones!" /*31*/,
          "Su registro está completo, inicie sesión con el botón de abajo." /*32*/,
          "Reenviar Token" /*33*/,
          "Tu Token ha caducado. Utilice el botón de abajo para enviar el token nuevamente." /*34*/,
        ],
      },
      // ptBr (2)
      {
        labels: [
          "Esqueceu sua senha?" /*0*/,
          "Login" /*1*/,
          "Não registrado?" /*2*/,
          "Inscreva-se!" /*3*/,
          "Email" /*4*/,
          "Erro" /*5*/,
          "Email inválido" /*6*/,
          "Senha desejada" /*7*/,
          "Ver senha" /*8*/,
          "Senha inválida" /*9*/,
          "Idioma" /*10*/,
          "Mantenha-me conectado" /*11*/,
          "Dashboard" /*12*/,
          "Usuário" /*13*/,
          "Login" /*14*/,
          "Registrar" /*15*/,
          "Próximo" /*16*/,
          "Passo" /*17*/,
          "Informe seu CPF" /*18*/,
          "CPF" /*19*/,
          "Informe nome completo" /*20*/,
          "Seu nome completo" /*21*/,
          "Anterior" /*22*/,
          "Informe seu email" /*23*/,
          "Confirmação" /*24*/,
          "CPF inválido!" /*25*/,
          "Nome inválido!" /*26*/,
          "Código numérico" /*27*/,
          "Informe seu código enviado por email" /*28*/,
          "Numero inválido!" /*29*/,
          "Por favor, informe um email cadastrado válido para receber sua última senha" /*30*/,
          "Parabéns!" /*31*/,
          "Seu cadastro está completo, faça o login com o botão abaixo." /*32*/,
          "Re-enviar Token" /*33*/,
          "Seu Token expirou. Use o botão abaixo para enviar o token novamente." /*34*/,
        ],
      },
    ];
  }
}

export function getCurrentLanguage() {
  return parseInt(localStorage.getItem("appLanguage"));
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
