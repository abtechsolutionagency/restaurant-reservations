import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../logo.png";

import "./Navbar.css";

const NavBar = () => {
  const history = useHistory();
  return (
    <nav className="navbar py-3">
      <div className="container-lg d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Seatable Logo" />
        </Link>
        <button
          className="btn btn-light"
          onClick={() => history.push("/search")}
        >
          <i className="bi bi-search me-2"></i>Search
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
