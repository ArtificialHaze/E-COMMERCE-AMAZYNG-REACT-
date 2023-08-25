import React, { useState } from "react";
import logo from "./assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Amazyng</span>
      </div>
      <div className="right">
        <div className="bars" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div
          className="menu"
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <ul className="menu-list">
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
          </ul>
        </div>
        <input type="text" placeholder="Search.." className="search" />
        <CgShoppingBag className="cart" />
      </div>
    </div>
  );
};

export default Header;
