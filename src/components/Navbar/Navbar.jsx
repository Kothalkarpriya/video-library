import React from "react";
import { Link } from "react-router-dom";
import "../../assests/styles/navbar.css";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <div className="heading-name">
        <Link className="nav-brand nav-brand-link" to="/">
          <h1>FullStackDevelopement</h1>
        </Link>
      </div>
      <div className="search-bar">
        <input placeholder="Search Video" />
        <FaSearch className="search-icon" />
      </div>
      <div className="auth-page">
        <Link className="nav-brand-link" to="/SignUp">
          <h3>SignUp</h3>
        </Link>
      </div>
    </nav>
  );
}
