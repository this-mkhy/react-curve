import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link
        class="navbar-brand"
        to="/"
        style={{ marginLeft: "20px", fontSize: "24px" }}
      >
        React Curve
      </Link>
    </nav>
    <div style={{height:"5rem"}}> </div>
    </React.Fragment>
  );
};

export default Header;
