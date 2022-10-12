import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <span className="logo">Quizbia</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-primary"
                    : " nav-link fw-semibold"
                }
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-primary"
                    : " nav-link fw-semibold"
                }
                aria-current="page"
                to="/topics"
              >
                Topics
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-primary"
                    : " nav-link fw-semibold"
                }
                aria-current="page"
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-primary"
                    : " nav-link fw-semibold"
                }
                aria-current="page"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
