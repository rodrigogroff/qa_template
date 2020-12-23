export class MenuAppLanguage {
  constructor() {
    this.availableLanguages = [
      "English",
      "Español",
      "Português BR",
      "Português PT",
    ];

    this.langs = [
      // english (0)
      {
        labels: [
          "Control panel" /* 0 */,
          "User" /* 1 */,
          "Login" /* 2 */,
          "Register" /* 3 */,
          "Dashboard" /* 4 */,
        ],
      },
      // spanish (1)
      {
        labels: [
          "Panel de control" /* 0 */,
          "Usuario" /* 1 */,
          "Iniciar sesión" /* 2 */,
          "Registrarse" /* 3 */,
          "Dashboard" /* 4 */,
        ],
      },
      // ptBr (2)
      {
        labels: [
          "Painel de controle" /* 0 */,
          "Usuário" /* 1 */,
          "Login" /* 2 */,
          "Registrar" /* 3 */,
          "Dashboard" /* 4 */,
        ],
      },
    ];
  }
}

export function Menu_MultiLanguage(index) {
  var curLanguage = localStorage.getItem("appLanguage");
  if (curLanguage == undefined) {
    curLanguage = 0;
    // ptBR default
    localStorage.setItem("appLanguage", curLanguage);
  }
  curLanguage = parseInt(curLanguage);

  var appLang = new MenuAppLanguage();

  return appLang.langs[curLanguage].labels[index];
}

export function BuildMenuTranslation() {
  return {
    pnlControl: Menu_MultiLanguage(0),
    userItem: Menu_MultiLanguage(1),
    loginItem: Menu_MultiLanguage(2),
    registerItem: Menu_MultiLanguage(3),
    dashboardItem: Menu_MultiLanguage(4),
  };
}

export default class {
  static getHtml() {
    var itens = BuildMenuTranslation();
    return `<div class="nav-menu" align='left'><nav class="menu">                
				<div class="nav-container">
					<ul class="main-menu">
            <li class="active">
              <a href="javascript:void(0);">${itens.pnlControl}</a>
              <ul>
								<li><a href="/" style='cursor:pointer'>${itens.dashboardItem}</a></li>								
							</ul>
            </li>
						<li>
							<a href="javascript:void(0);">${itens.userItem}</a>
							<ul>
								<li><a href="/login" style='cursor:pointer'>${itens.loginItem}</a></li>
								<li><a href="/register" style='cursor:pointer'>${itens.registerItem}</a></li>
							</ul>
						</li>						
          </ul>
          <br>
          <p style='color:white;padding-left:20px'>v1.5.1 R22</p>
          <br>
          <br>
				</div>
			</nav>
		</div>`;
  }
}
