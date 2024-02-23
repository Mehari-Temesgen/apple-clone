import React, { useEffect } from "react";
import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import HeaderLink from "./HeaderLink";
import { Link } from "react-router-dom";
import $ from "jquery";
function Header() {
  useEffect(() => {
    return () => {
      $(".navbar-toggler-icon").on("click", ToggleDown);
      function ToggleDown() {
        $("#navmenu").slideToggle();
      }
    };
  }, []);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="nav1"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav w-100 nav-fill" id="custom">
              <HeaderLink LinkURL="/Mac" LinkName="Mac" />
              <HeaderLink LinkURL="/iphone" LinkName="iphone" />
              <HeaderLink LinkURL="/ipad" LinkName="ipad" />
              <HeaderLink LinkURL="/tv" LinkName="tv" />
              <HeaderLink LinkURL="/mussic" LinkName="mussic" />
              <HeaderLink LinkURL="/support" LinkName="support" />
              <li className="nav-item" id="search-icon">
                <Link to="#" className="nav-link">
                  <img src={search} alt="search" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <img src={cart} alt="cart" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
