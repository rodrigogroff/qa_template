export class AppLanguage {
  constructor() {
    this.availableLanguages = ["English", "Español", "Português BR"];

    this.langs = [
      // english (0)
      {
        labels: [
          "<h3>Hello World!</h3> from a <b>new revision</b> of web development!" /*0*/,
          "Awesome results!" /*1*/,
          "Nothing unused or wasted" /*2*/,
          "What we <b>deliver</b>:" /*3*/,
          "INSANE performance of mobile first approach" /*4*/,
          "Analisys and full breakdown of modern frontend / frameworks" /*5*/,
          "Analisys and full breakdown of modern backend tech" /*6*/,
          "Archictecture for best performance, best hardware and software combined" /*7*/,
          "Check it out!" /*8*/,
        ],
      },
      // spanish (1)
      {
        labels: [
          "<h3>Hello World!</h3> de una <b> nueva revisión </b> del desarrollo web!" /*0*/,
          "¡Resultados asombrosos!" /*1*/,
          "Nada sin usar o desperdiciado" /*2*/,
          "Qué <b> entregamos </b>:" /*3*/,
          "Rendimiento demencial del primer enfoque móvil" /*4 */,
          "Análisis y desglose completo de frontend / frameworks modernos" /* 5 */,
          "Análisis y desglose completo de la tecnología backend moderna" /* 6 */,
          "Arquitectura para el mejor rendimiento, el mejor hardware y software combinados" /* 7 */,
          "Compruébalo!" /* 8 */,
        ],
      },
      // ptBr (2)
      {
        labels: [
          "<h3>Hello World!</h3> de uma <b> nova revisão </b> de desenvolvimento web" /* 0 */,
          "Resultados fantásticos!" /* 1 */,
          "Nada não utilizado ou desperdiçado" /* 2 */,
          "O que <b> entregamos </b>:" /* 3 */,
          "Desempenho INSANO da primeira abordagem móvel" /* 4 */,
          "Análise e análise completa de front-end / frameworks modernos" /* 5 */,
          "Análise e análise completa da tecnologia de back-end moderna" /* 6 */,
          "Arquitetura para melhor desempenho, melhor hardware e software combinados" /* 7 */,
          "Dê uma olhada!" /* 8 */,
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
