import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import logo from "../../imgs/logo.png";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div>
        <ul className="navbar-menu">
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "white" }}
              onClick={closeSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
              onClick={closeSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "white" }}
              onClick={closeSidebar}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/packages"
              style={{ textDecoration: "none", color: "white" }}
              onClick={closeSidebar}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              style={{ textDecoration: "none", color: "white" }}
              onClick={closeSidebar}
            >
              Support
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-menu-icon" onClick={toggleSidebar}>
        {showSidebar ? <FiX /> : <FiMenu />}
      </div>

      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-close" onClick={toggleSidebar}>
            <FiX />
          </div>
          <ul className="sidebar-menu">
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
                onClick={closeSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
                onClick={closeSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                style={{ textDecoration: "none", color: "white" }}
                onClick={closeSidebar}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                style={{ textDecoration: "none", color: "white" }}
                onClick={closeSidebar}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                style={{ textDecoration: "none", color: "white" }}
                onClick={closeSidebar}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
