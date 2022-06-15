import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assests/styles/navbar.css";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../context/context";

export default function Navbar() {
  const { authState, logout } = useAuth();
  const { isLoggedIn } = authState;
  return (
    <nav>
      <div className="heading-name">
        <Link className="nav-brand nav-brand-link" to="/">
          <h1>FullStackDevelopement</h1>
        </Link>
      </div>
      {/* <div className="search-bar">
        <input placeholder="Search Video" />
        <FaSearch className="search-icon" />
      </div> */}
      <div className="auth-page">
        {isLoggedIn === true ? (
          <NavLink to="/">
            <button className="btn primary-btn" onClick={() => logout()}>
              Logout
            </button>
          </NavLink>
        ) : (
          <NavLink to="/Login">
            <button className="btn primary-btn">Login</button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}
