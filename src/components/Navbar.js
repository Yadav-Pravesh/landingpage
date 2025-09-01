import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ Link की जगह NavLink
import "../styles/Navbar.css";
import logo from "../assets/Bizzario.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="nav-left">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Bizaario Care Logo" className="logo" />
        </NavLink>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Center Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
        <li><NavLink to="/hospital-partners" onClick={() => setMenuOpen(false)}>Hospital Partners</NavLink></li>
        <li><NavLink to="/medical-board" onClick={() => setMenuOpen(false)}>Medical Board</NavLink></li>
        <li><NavLink to="/news-articles" onClick={() => setMenuOpen(false)}>News & Articles</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <select className="language-select">
          <option>English India</option>
          <option>English US</option>
        </select>
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
}
