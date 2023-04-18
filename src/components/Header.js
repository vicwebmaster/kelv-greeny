import React from "react";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div class="backdrop"></div>
    <Link class="backtop fas fa-arrow-up" to="#"></Link>
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-5">
            <div class="header-top-welcome">
              <p>Welcome to Ecomart in Your Dream Online Store!</p>
            </div>
          </div>
          <div class="col-md-5 col-lg-3">
            <div class="header-top-select">
              <div class="header-select">
                <i class="icofont-world"></i
                ><select class="select">
                  <option value="english" selected>english</option>
                  <option value="bangali">bangali</option>
                  <option value="arabic">arabic</option>
                </select>
              </div>
              <div class="header-select">
                <i class="icofont-money"></i
                ><select class="select">
                  <option value="english" selected>doller</option>
                  <option value="bangali">pound</option>
                  <option value="arabic">taka</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-4">
            <ul class="header-top-list">
              <li><Link to="/Offer">offers</Link></li>
              <li><Link to="/Quest">need help</Link></li>
              <li><Link to="/Contact">contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <header class="header-part sticky-top">
      <div class="container">
        <div class="header-content">
          <div class="header-media-group">
            <button class="header-user">
              <img src="./Assest/images/user.png" alt="user" /></button
            ><Link to="/"><img src="./Assest/images/logo.png" alt="logo" /></Link>
            <button class="header-src"><i class="fas fa-search"></i></button>
          </div>
          <Link to="/" class="header-logo"><img src="./Assest/images/logo.png" alt="logo" /></Link>
          <Link to="/SignIn" class="header-widget" title="My Account"><img src="./Assest/images/user.png" alt="user" /><span>join</span></Link>
           <form class="header-form">
            <input type="text" placeholder="Search anything..." /><button>
              <i class="fas fa-search"></i>
            </button>
          </form>
          <div class="header-widget-group">
            <Link to="/Compare" class="header-widget" title="Compare List"
              ><i class="fas fa-random"></i><sup>0</sup></Link>
            <Link to="/Wishlist" class="header-widget" title="Wishlist"
              ><i class="fas fa-heart"></i><sup>0</sup></Link>
            <button class="header-widget header-cart" title="Cartlist">
              <i class="fas fa-shopping-basket"></i><sup>9+</sup
              ><span>total price<small>$345.00</small></span>
            </button>
          </div>
        </div>
      </div>
    </header>
      <nav className="navbar-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="navbar-content">
              <ul className="navbar-list">
                <li className="navbar-item dropdown">
                  <Link className="navbar-link " to="/">home</Link>
                 
                </li>
                <li className="navbar-item dropdown-megamenu">
                  <Link className="navbar-link " to="/Shop">shop</Link>
                 
                </li>
               
                <li className="navbar-item dropdown">
                  <Link className="navbar-link dropdown-arrow" to="/">pages</Link>
                  <ul className="dropdown-position-list">
                    <li><Link to="/Quest">faqs</Link></li>
                    <li><Link to="/Offer">offers</Link></li>
                    <li><Link to="/Profile">my profile</Link></li>
                    <li><Link to="/Wallet">my wallet</Link></li>
                    <li><Link to="/About">about us</Link></li>
                    <li><Link to="/Contact">contact us</Link></li>
                    <li><Link to="/*">404 Error</Link></li>
                    <li><Link to="/Email">email template</Link></li>
                  </ul>
                </li>
                <li className="navbar-item dropdown">
                  <Link className="navbar-link dropdown-arrow" to="#">authentic</Link>
                  <ul className="dropdown-position-list">
                    <li><Link to="/SignIn">login</Link></li>
                    <li><Link to="/SignUp">register</Link></li>
                    <li><Link to="/ResetPass">reset password</Link></li>
                    <li><Link to="/ChangePass">change password</Link></li>
                  </ul>
                </li>
               
              </ul>
              <div className="navbar-info-group">
                <div className="navbar-info">
                  <i className="icofont-ui-touch-phone"></i>
                  <p><small>call us</small><span>(+880) 183 8288 389</span></p>
                </div>
                <div className="navbar-info">
                  <i className="icofont-ui-email"></i>
                  <p><small>email us</small><span>support@example.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
