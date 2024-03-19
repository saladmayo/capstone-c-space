import React from "react";
import "./Navbar.css"; // import this CSS file

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="logo">C-SPACE</h1>
      {/* <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button> */}
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Spaces
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Account
            </a>
          </li>
          <div className="language-dropdown">
            <select id="languageSelect">
              <option value="en">English</option>
              <option value="th">ไทย</option>
            </select>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
