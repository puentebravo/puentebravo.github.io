import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container.fluid">
      <nav className="navbar navbar-expand-lg navbar-dark dark">
        <Link className="navbar-brand text-flight" to="/">
          Charlie Puente
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/">
                <i className="fas fa-id-card"></i> Home
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/portfolio">
                <i className="fas fa-atom"></i> Portfolio
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/contact"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/contact">
                <i className="fas fa-id-badge"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
