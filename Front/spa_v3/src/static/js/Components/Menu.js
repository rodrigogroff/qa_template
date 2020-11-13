
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

export default class {

	constructor(params) {
		this.params = params;
	}

	static getHtml() {
		return MainCtrl.HtmlCleanup(`
			<div class="nav-menu" align='left'>
				<nav class="menu">
					<div class="nav-header">
						<a href='/' style='cursor:pointer'><img src="/static/img/app-logo.png" width="160"></a>
					</div>
					<div class="nav-container">
						<ul class="main-menu">
							<li class="active">
								<a href='/' style='cursor:pointer'><i class="fa fa-home"></i> Home</a>
							</li>
							<li>
								<a href="javascript:void(0);"><i class="fa fa-sign-in"></i> Entry <span class="fa fa-angle-down"></span></a>
								<ul>
									<li><a href="/login" style='cursor:pointer'>Login</a></li>
									<li><a href="/posts" style='cursor:pointer'>Posts</a></li>
									<li><a href="/datatableclickpagination" style='cursor:pointer'>Table</a></li>
									<li><a href="#" >Register</a></li>
									<li><a href="#" >Forgot Password</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>	
            `);
	}
}
