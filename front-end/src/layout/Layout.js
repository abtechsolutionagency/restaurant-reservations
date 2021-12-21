import React from "react";
import Routes from "./Routes";

import NavBar from "./NavBar";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <div className="container-lg">
        <Routes />
      </div>
    </div>
  );
}

export default Layout;
