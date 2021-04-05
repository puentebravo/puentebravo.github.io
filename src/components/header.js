import React from "react";

function Header() {
  return (
    <div className="container.fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">
          Charlie Puente
        </a>
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
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-id-card"></i> Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                <i className="fas fa-atom"></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                <i className="fas fa-id-badge"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
