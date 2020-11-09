
export default class {

    constructor(params) {
        this.params = params;
    }

    getHtml(p) {
        return `
        <div class="wrapper">
		<div class="nav-menu">
			<nav class="menu">
				<!-- Template logo start -->
				<div class="nav-header">
					<a _href="/"><img src="static/img/app-logo.png" width="160"></a>
				</div>
				<!-- Template logo end -->
				<!-- Menu navigation start -->
				<div class="nav-container">
					<ul class="main-menu">
						<li class="active">
							<a _href="/"><i class="fa fa-home"></i> Home</a>
						</li>
						<li>
							<a href="javascript:void(0);"><i class="fa fa-sign-in"></i> Entry <span class="fa fa-angle-down"></span></a>
							<ul>
								<li><a href="login.html" data-loader="show">Login</a></li>
								<li><a href="signup.html" data-loader="show">Register</a></li>
								<li><a href="forgot-password.html" data-loader="show">Forgot Password</a></li>
							</ul>
						</li>
						<li>
							<a href="javascript:void(0);"><i class="fa fa-file-image-o"></i> Gallery <span class="fa fa-angle-down"></span></a>
							<ul>
								<li><a href="album.html" data-loader="show">Albums</a></li>
								<li><a href="gallery.html" data-loader="show">Gallery</a></li>
							</ul>
						</li>
						<li>
							<a href="#"><i class="fa fa-file-text-o"></i> Blog <span class="fa fa-angle-down"></span></a>
							<ul>
								<li><a href="post-list-1.html" data-loader="show">List 1</a></li>
								<li><a href="post-list-2.html" data-loader="show">List 2</a></li>
								<li><a href="post-detail.html" data-loader="show">Detail</a></li>
								<li><a href="post-author.html" data-loader="show">Author</a></li>
							</ul>
						</li>
						<li>
							<a href="#"><i class="fa fa-shopping-basket"></i> Shop <span class="fa fa-angle-down"></span></a>
							<ul>
								<li><a href="product-list.html" data-loader="show">Product List</a></li>
								<li><a href="product-detail.html" data-loader="show">Product Detail</a></li>
								<li><a href="product-basket.html" data-loader="show">Basket</a></li>
							</ul>
						</li>
						<li>
							<a href="javascript:void(0);"><i class="fa fa-magic"></i> Wizards <span class="fa fa-angle-down"></span></a>
							<ul>
								<li><a href="wizard-default.html" data-loader="show">Wizard Default</a></li>
								<li><a href="wizard-fullscreen.html" data-loader="show">Wizard Fullscreen</a></li>
							</ul>
						</li>
						<li>
							<a href="forms.html" data-loader="show"><i class="fa fa-th-large"></i> Form Elements</a>
						</li>
						<li>
							<a href="#"><i class="fa fa-table"></i> Components <span class="fa fa-angle-down"></span></a>
							<ul>
								<li><a href="tab-bottom.html" data-loader="show">Tab (Bottom)</a></li>
								<li><a href="tab-top.html" data-loader="show">Tab (Top)</a></li>
								<li><a href="accordion.html" data-loader="show">Accordion</a></li>
								<li><a href="popup.html" data-loader="show">Popup Modal</a></li>
								<li><a href="checkbox-list.html" data-loader="show">Check List</a></li>
								<li><a href="link-list.html" data-loader="show">Link List</a></li>
								<li><a href="link-list-two-column.html" data-loader="show">Two Column Links</a></li>
							</ul>
						</li>
						<li>
							<a href="#"><i class="fa fa-file-text-o"></i> Pages <span class="fa fa-angle-down"></span></a>
							<ul>
								<li><a href="profile.html" data-loader="show">User Profile</a></li>
								<li><a href="search-popup.html" data-loader="show">Search Popup</a></li>
								<li><a href="search-result.html" data-loader="show">Search Results</a></li>
								<li><a href="contact.html" data-loader="show">Contact</a></li>
								<li><a href="blank.html" data-loader="show">Blank Page</a></li>
							</ul>
						</li>
					</ul>
				</div>
			<!-- Menu navigation end -->
			</nav>
		</div>
		<div class="wrapper-inline">
			<!-- Header area start -->
			<header> <!-- extra class no-background -->
				<a class="go-back-link" href="javascript:history.back();"><i class="fa fa-arrow-left"></i></a>
				<h1 class="page-title">IDEABOX MOBILE UI</h1>
				<div class="navi-menu-button">
					<em></em>
					<em></em>
					<em></em>
				</div>
			</header>
			<!-- Header area end -->
			<!-- Page content start -->
			<main>
			
				<section class="container">
					
					<div class="animated-text vertical-center zero-opacity">
						<h1>
							<span class="text1 block txt-light" data-transation="fadeInDown" data-start-time="0">Save Hours</span>
							<span class="text3 block txt-bold" data-transation="zoomIn" data-start-time="300">of</span>
							<span class="text4 block txt-extra-bold txt-red" data-transation="zoomInDown" data-start-time="500">FRONT</span>
							<span class="text5 block txt-extra-bold txt-red" data-transation="zoomInDown" data-start-time="600">END</span>
							<span class="text6 block txt-extra-bold txt-red" data-transation="zoomInDown" data-start-time="700">DEVELOPING</span>
							<span class="text7 block txt-light" data-transation="fadeInUp" data-start-time="1000">and make mobile website fast as light</span>
							<br>
							<div class="text-center" data-transation="tada" data-start-time="2000">
								<a href="javascript:void(0);" class="button circle blue">Get Started</a>
							</div>
						</h1>
					</div>

				</section>
			</main>
			<!-- Page content end -->
		</div>
	</div>


	<!--Page loader DOM Elements. Requared all pages-->
	<div class="sweet-loader">
		<div class="box">
		  	<div class="circle1"></div>
		  	<div class="circle2"></div>
		  	<div class="circle3"></div>
		</div>
	</div>      
            `;
    }
}








