import "../css/MyNavbar.css";
import React from "react";
import { Link } from "react-router-dom";
import corelines_white_logo from "../pics/allWhite.png";
import cart_logo from "../pics/1cart.png";
import { useState } from "react";

function MyNavbar() {
  return (
    <div className="main_header">
      <div className="navbar_logo_container">
        <Link to="/">
          <img
            className="links_corelines_logo"
            src={corelines_white_logo}
            alt="Home"
          />
        </Link>
      </div>
      <input type="checkbox" id="menu-checkbox"></input>
      <label className="icons-checkbox" htmlFor="menu-checkbox">
        <i class="menu-open-icon bx bx-menu"></i>
        <i class="menu-close-icon bx bx-x"></i>
      </label>
      <div className="links_div_container">
        <Link className="link_in_div_container" to="/">
          CORELINES
        </Link>
        <Link className="link_in_div_container" to="/Produkter">
          Produkter
        </Link>
        <Link className="link_in_div_container" to="/Kontakt">
          Kontakt
        </Link>
        <Link className="link_in_div_container" to="/Cart">
          <img className="links_cart_logo" src={cart_logo}></img>
        </Link>
      </div>
    </div>
  );
}

export default MyNavbar;
