import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  const history = useHistory();
  return (
    <nav className="navbar py-3">
      <div className="container-lg d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="brand-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M16.761 10.497a3.725 3.725 0 002.652-1.099l3.61-3.607a.764.764 0 00.04-1.05.75.75 0 00-1.087-.025L18.76 7.93a.576.576 0 01-.814 0 .592.592 0 01.012-.827L21.16 3.9a.75.75 0 00-.026-1.085.732.732 0 00-.496-.19.783.783 0 00-.554.23l-3.2 3.2a.576.576 0 01-.814 0 .593.593 0 01.011-.827l3.203-3.203A.751.751 0 0019.258.94a.732.732 0 00-.496-.19.784.784 0 00-.553.23l-3.607 3.607a3.726 3.726 0 00-1.1 2.652v.386a.75.75 0 01-.219.531l-1.67 1.67a.188.188 0 01-.265 0L3.226 1.703A.75.75 0 002.168 1.7c-.71.704-1.09 1.697-1.09 2.872-.005 1.94 1.015 4.172 2.662 5.817l4.006 4.005a3.037 3.037 0 002.904.79.747.747 0 01.698.174l.535.493c.138.141.215.33.215.527v.26c0 .59.231 1.157.646 1.577l4.221 4.292.004.005a2.498 2.498 0 103.533-3.533l-6.327-6.327a.189.189 0 010-.266l1.669-1.669a.748.748 0 01.53-.22h.387z"
              />
              <path
                fill="#fff"
                d="M9.89 16.781a4.562 4.562 0 01-3.204-1.324l-.65-.65a.375.375 0 00-.53 0l-3.983 3.964c-.71.71-.964 1.755-.613 2.78.02.057.043.113.07.168.473.968 1.391 1.531 2.395 1.531a2.612 2.612 0 001.858-.77l5.314-5.34a.22.22 0 00.062-.174v-.012a.218.218 0 00-.242-.2 4.548 4.548 0 01-.476.027z"
              />
            </svg>
          </span>
          <span className="brand-text">Table For You</span>
        </Link>
        <button onClick={() => history.push("/search")}>
          <span className="button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="#2F73DA"
                d="M14.272 13.168l-2.94-2.94A5.432 5.432 0 0012.42 6.96c0-3.01-2.45-5.46-5.46-5.46S1.5 3.95 1.5 6.96s2.45 5.46 5.46 5.46a5.432 5.432 0 003.268-1.089l2.94 2.94a.782.782 0 001.104-1.103zM3.06 6.96a3.9 3.9 0 117.8 0 3.9 3.9 0 01-7.8 0z"
              />
            </svg>
          </span>
          Search
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
