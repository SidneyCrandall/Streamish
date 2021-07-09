import React from "react";
import { Link } from "react-router-dom";

// Component that want to be rendered consistently across the components. 
// This is what a user will use to navigate to all parts of the StreamISH site. 
// The 'Link' and 'to will be what directs the broswer to render'
const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        StreamISH
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/videos/add" className="nav-link">
            New Video
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;