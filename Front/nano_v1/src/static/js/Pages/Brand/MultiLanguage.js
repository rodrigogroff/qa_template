
export class AppLanguage {
  constructor() {
    this.availableLanguages = ["English", "Español", "Português BR"];

    this.langs = [
      // english (0)
      {
        labels: [
          "Brand Listing" /*0*/,
          "No results found!" /*1*/,
          "ID" /*2*/,
          "Brand Name" /*3*/,
          "Search" /*4*/,
        ],
      },
      // spanish (1)
      {
        labels: [
          "Brand Listing" /*0*/,
          "No results found!" /*1*/,
          "ID" /*2*/,
          "Brand Name" /*3*/,
          "Buscar" /*4*/,
        ],
      },
      // ptBr (2)
      {
        labels: [
          "Brand Listing" /*0*/,
          "No results found!" /*1*/,
          "ID" /*2*/,
          "Brand Name" /*3*/,
          "Buscar" /*4*/,
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
