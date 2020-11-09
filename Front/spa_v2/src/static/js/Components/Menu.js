
export default class {

	constructor(params) {
		this.params = params;
	}

	getHtml(p) {
		return `
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
									<li><a href="/login" style='cursor:pointer' data-loader="show">Login</a></li>
									<li><a href="#" data-loader="show">Register</a></li>
									<li><a href="#" data-loader="show">Forgot Password</a></li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);"><i class="fa fa-file-image-o"></i> Gallery <span class="fa fa-angle-down"></span></a>
								<ul>
									<li><a href="#" data-loader="show">Albums</a></li>
									<li><a href="#" data-loader="show">Gallery</a></li>
								</ul>
							</li>
							<li>
								<a href="#"><i class="fa fa-file-text-o"></i> Blog <span class="fa fa-angle-down"></span></a>
								<ul>
									<li><a href="#" data-loader="show">List 1</a></li>
									<li><a href="#" data-loader="show">List 2</a></li>
									<li><a href="#" data-loader="show">Detail</a></li>
									<li><a href="#" data-loader="show">Author</a></li>
								</ul>
							</li>
							<li>
								<a href="#"><i class="fa fa-shopping-basket"></i> Shop <span class="fa fa-angle-down"></span></a>
								<ul>
									<li><a href="#" data-loader="show">Product List</a></li>
									<li><a href="#" data-loader="show">Product Detail</a></li>
									<li><a href="#" data-loader="show">Basket</a></li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);"><i class="fa fa-magic"></i> Wizards <span class="fa fa-angle-down"></span></a>
								<ul>
									<li><a href="#" data-loader="show">Wizard Default</a></li>
									<li><a href="#" data-loader="show">Wizard Fullscreen</a></li>
								</ul>
							</li>
							<li>
								<a href="forms.html" data-loader="show"><i class="fa fa-th-large"></i> Form Elements</a>
							</li>
							<li>
								<a href="#"><i class="fa fa-table"></i> Components <span class="fa fa-angle-down"></span></a>
								<ul>
									<li><a href="#" data-loader="show">Tab (Bottom)</a></li>
									<li><a href="#" data-loader="show">Tab (Top)</a></li>
									<li><a href="#" data-loader="show">Accordion</a></li>
									<li><a href="#" data-loader="show">Popup Modal</a></li>
									<li><a href="#" data-loader="show">Check List</a></li>
									<li><a href="#" data-loader="show">Link List</a></li>
									<li><a href="#" data-loader="show">Two Column Links</a></li>
								</ul>
							</li>
							<li>
								<a href="#"><i class="fa fa-file-text-o"></i> Pages <span class="fa fa-angle-down"></span></a>
								<ul>
									<li><a href="#" data-loader="show">User Profile</a></li>
									<li><a href="#" data-loader="show">Search Popup</a></li>
									<li><a href="#" data-loader="show">Search Results</a></li>
									<li><a href="#" data-loader="show">Contact</a></li>
									<li><a href="#" data-loader="show">Blank Page</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>	
            `;
	}
}
