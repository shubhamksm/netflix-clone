import React from "react";
import MainLogo from "../../resources/netflix-main-logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar__logo">
          <img src={MainLogo} alt="Netflix" />
        </li>
      </ul>
      <ul>
        <li>
          <i class="fas fa-search fa-lg"></i>
        </li>
        <li>
          <i class="far fa-bell fa-lg"></i>
        </li>
        <li>
          <i class="fas fa-user fa-lg"></i>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
