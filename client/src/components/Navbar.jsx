import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <div className="logo">
          <img
            src="https://drive.google.com/uc?export=view&id=1TqnFl9MxptCc16USgJgWnV7p7RgHbLZI"
            alt="Logo"
          />
        </div>
        PAWfect Match
      </Link>

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact/Donate</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
