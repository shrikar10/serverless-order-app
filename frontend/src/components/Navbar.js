import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="nav-right">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
