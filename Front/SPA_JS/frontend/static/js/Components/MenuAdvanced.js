
export default class {

    constructor(params) {
        this.params = params;
    }

    getHtml(p) {
        return `
        <header style="height:60px;">
            <div class="header">
                <div class="container">
                    <!-- header left -->
                    <div class="header-left hide-md">
                        <div class="header-logo logo-type">
                            <a href="/">Ultra QA</a>
                        </div>
                    </div><!-- END / header left -->

                    <!-- header middle -->
                    <div class="header-middle">
                        <div class="header-searchbox">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search ...">
                                    <button><i class="fa fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- END / header middle -->

                    <!-- header right -->
                    <div class="header-right">
                        <!-- dropdown message -->
                        <div class="dropdown header-message">
                            <a href="" data-toggle="dropdown" class="dropdown-toggle">
                                <span class="feather-icon"><i data-feather="mail"></i></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-header">
                                    <div class="dropdown-title">
                                        <span>Messages</span>
                                    </div>
                                    <div class="notification-counter">2</div>
                                </div>
                                <ul class="media-list">
                                    <li class="dropdown-item">
                                        <a href="#">
                                            <div class="media-item">
                                                <div class="media-circle bg-success">
                                                    <img src="./assets/images/avatar1.jpg" class="img-responsive" alt="...">
                                                </div>
                                                <div class="media-item-text">
                                                    <span class="media-item-title">2018 income-expense report</span>
                                                    <span class="media-item-subtitle">Brad T.</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-item active">
                                        <a href="#">
                                            <div class="media-item">
                                                <div class="media-circle bg-success">
                                                    <img src="./assets/images/avatar2.jpg" class="img-responsive" alt="...">
                                                </div>
                                                <div class="media-item-text">
                                                    <span class="media-item-title">Order notification #1344763</span>
                                                    <span class="media-item-subtitle">Scarlet P.</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-item">
                                        <a href="#">
                                            <div class="media-item">
                                                <div class="media-circle bg-success">
                                                    <img src="./assets/images/avatar3.jpg" class="img-responsive" alt="...">
                                                </div>
                                                <div class="media-item-text">
                                                    <span class="media-item-title">About the latest update</span>
                                                    <span class="media-item-subtitle">Carlos M.</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-item active">
                                        <a href="#">
                                            <div class="media-item">
                                                <div class="media-circle bg-success">
                                                    <img src="./assets/images/avatar4.jpg" class="img-responsive" alt="...">
                                                </div>
                                                <div class="media-item-text">
                                                    <span class="media-item-title">Security settings</span>
                                                    <span class="media-item-subtitle">Shaddy E.</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div><!-- END / dropdown message -->

                        <!-- dropdown notification -->
                        <div class="dropdown header-notification ">
                            <a href="" data-toggle="dropdown" class="dropdown-toggle">
                                <span class="feather-icon"><i data-feather="bell"></i></span>
                                <span class="notification-dot"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-header">
                                    <div class="dropdown-title">
                                        <span>Notifications</span>
                                    </div>
                                    <div class="notification-counter">1</div>
                                </div>
                                <ul class="media-list">
                                    <li class="dropdown-item">
                                        <a href="#">
                                            <div class="media-item">
                                                <div class="media-circle bg-success">
                                                    <i class="fas fa-bell"></i>
                                                </div>
                                                <div class="media-item-text">
                                                    <span class="media-item-title">Carl Jakson added a new product.</span>
                                                    <span class="media-item-subtitle">12 hours ago</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-item active">
                                        <a href="#">
                                            <div class="media-item">
                                                <div class="media-circle bg-danger">
                                                    <i class="fas fa-times"></i>
                                                </div>
                                                <div class="media-item-text">
                                                    <span class="media-item-title">Sales transaction canceled.</span>
                                                    <span class="media-item-subtitle">14 hours ago</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-item">
                                        <a href="#">
                                            <div class="media-item">
                                                <div class="media-circle bg-info">
                                                    <i class="fas fa-user"></i>
                                                </div>
                                                <div class="media-item-text">
                                                    <span class="media-item-title">Today we have 17 orders</span>
                                                    <span class="media-item-subtitle">21 hours ago</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-item">
                                        <a href="#">
                                            <div class="media-item">
                                                <div class="media-circle bg-info">
                                                    <i class="fas fa-plus"></i>
                                                </div>
                                                <div class="media-item-text">
                                                    <span class="media-item-title">20+ new products added.</span>
                                                    <span class="media-item-subtitle">2 day ago</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div><!-- END / dropdown notification -->

                        <!-- dropdown profile -->
                        <div class="dropdown header-profile">
                            <a href="" data-toggle="dropdown" class="avatar avatar-sm dropdown-toggle">
                                <img src="./assets/images/avatar1.jpg" class="img-responsive" alt="...">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="header-profile-info">
                                    <div class="user-img">
                                        <img src="./assets/images/header-avatar.jpg" class="img-responsive" alt="...">
                                    </div>
                                    <div class="user-name">Alina Brazovski</div>
                                    <div class="user-title">Founder</div>
                                </div>
                                <div class="header-profile-menu">
                                    <a href="/login" class="dropdown-item">
                                        <span class="feather-icon"><i data-feather="power"></i></span>
                                        Sign Out
                                    </a>
                                </div>
                            </div>
                        </div><!-- END / dropdown profile -->
                    </div><!-- END / header right -->
                </div>
            </div>

            <!-- Main Menu -->
            <div class="main-menu color-scheme-dark">
                <div class="container">
                    <ul class="nav">
                        <li class="nav-item sub-item active">
                            <a href="#" class="nav-link sub-item-toggle">
                                <span>Default</span>
                            </a>
                            <div class="sub-menu">
                                <ul>
                                    <li><a href="/">Dashboard</a></li>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/login">Register</a></li>
                                    <li><a href="/posts">Browser Nav.</a></li>
                                </ul>
                            </div>
                        </li>                    
                        <li class="nav-item sub-item active">
                            <a href="#" class="nav-link sub-item-toggle">
                                <span>Components</span>
                            </a>
                            <div class="sub-menu">
                                <ul>
                                    <li><a href="/datalabel">Data Label</a></li>
                                    <li><a href="/timer">Timer</a></li>
                                    <li><a href="/trigger">Trigger</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item sub-item active">
                            <a href="#" class="nav-link sub-item-toggle">
                                <span>Reports</span>
                            </a>
                            <div class="sub-menu">
                                <ul>
                                    <li><a href="/datatable">Table</a></li>
                                    <li><a href="/datatableclick">Table Click</a></li>
                                    <li><a href="/datatableclickpagination">Table Pagination</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div><!-- END / Main Menu -->
            
        </header><!-- END / Header --></div>        
        <div style='height:90px'></div>        
        `;
    }
}








