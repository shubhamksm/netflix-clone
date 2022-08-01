import classNames from "classnames";
import React, { useEffect, useState } from "react";
import MainLogo from "../../resources/netflix-main-logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [className, setClassName] = useState("");

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 95) {
      setClassName("--bgDark");
    } else {
      setClassName("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={classNames("navbar", className)}>
      <ul>
        <li className="navbar__logo">
          <img src={MainLogo} alt="Netflix" />
        </li>
      </ul>
      <ul>
        <li>
          <i className="fas fa-search fa-lg"></i>
        </li>
        <li>
          <i className="far fa-bell fa-lg"></i>
        </li>
        <li>
          <i className="fas fa-user fa-lg"></i>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
