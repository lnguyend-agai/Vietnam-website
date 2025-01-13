import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <h1>Việt Nam</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#economy">Kinh tế</a></li>
        <li><a href="#sports">Thể thao</a></li>
        <li><a href="#music">Âm nhạc</a></li>
        <li><a href="#tourism">Du lịch</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
