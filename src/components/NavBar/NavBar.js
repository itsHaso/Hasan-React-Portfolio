import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default Navbar;
