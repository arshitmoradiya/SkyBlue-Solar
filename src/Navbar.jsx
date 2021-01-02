import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Skyblue.png";

const Navbar = () => {
  return (
    <>
      <div className="nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                <img className="ml-3 ml-lg-5" style={{  width: "100px" , height: "50%"}} src={web}/>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"

                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse  navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0 mr-lg-5" >
                    <li className="nav-item ml-3" >
                      <NavLink                      
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item ml-3" >
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item ml-3">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/gallery"
                      >
                        Project
                      </NavLink>
                    </li>
                    <li className="nav-item ml-3">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item ml-3">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
