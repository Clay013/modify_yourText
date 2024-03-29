import React from "react";

import PropTypes from "prop-types";

// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a  href="#about" className="nav-link">
                  {/* {props.AboutName} */}
                  About Us
                </a>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.changeTheme}
              />
              <label className={`form-check-label text-${props.mode === 'light' ? `dark` : `light`}`} htmlFor="flexSwitchCheckDefault">
                Enable Darkmode
              </label>
            </div>

            {/* <htmlForm className="d-flex" role="search">
              <input
                className="htmlForm-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </htmlForm>
            <button className="btn btn-primary" type="submit">
              Search
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Aboutlink: PropTypes.string,
};

// Navbar.defaultProps = {
//     title: "texthead",
//     Aboutlink: "abouthead"
//   };
