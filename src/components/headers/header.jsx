import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="#logo">
          Logo
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">
            <li
              className={`nav-item ${
                activeNavItem === "home" ? "navbar-active" : ""
              }`}
            >
              <Link
                className="nav-link"
                to="#home"
                onClick={() => handleNavItemClick("home")}
              >
                <span>Home</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeNavItem === "trending" ? "navbar-active" : ""
              }`}
            >
              <Link
                className="nav-link"
                to="#trending"
                onClick={() => handleNavItemClick("trending")}
              >
                <span>Trending</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeNavItem === "schedule" ? "navbar-active" : ""
              }`}
            >
              <Link
                className="nav-link"
                to="#schedule"
                onClick={() => handleNavItemClick("schedule")}
              >
                <span>Schedule</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeNavItem === "anime" ? "navbar-active" : ""
              }`}
            >
              <Link
                className="nav-link"
                to="#anime"
                onClick={() => handleNavItemClick("anime")}
              >
                <span>Anime</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeNavItem === "recently-added" ? "navbar-active" : ""
              }`}
            >
              <Link
                className="nav-link"
                to="#recently-added"
                onClick={() => handleNavItemClick("recently-added")}
              >
                <span>Recently Added</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeNavItem === "popular-shows" ? "navbar-active" : ""
              }`}
            >
              <Link
                className="nav-link"
                to="#popular-shows"
                onClick={() => handleNavItemClick("popular-shows")}
              >
                <span>Popular Shows</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeNavItem === "random" ? "navbar-active" : ""
              }`}
            >
              <Link
                className="nav-link"
                to="#random"
                onClick={() => handleNavItemClick("random")}
              >
                <span>Random</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
