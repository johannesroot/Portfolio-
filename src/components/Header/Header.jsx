import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (e) => {
    // Prevent menu from closing immediately after clicking a link
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close the menu after the link is clicked
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">John</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`side-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#main" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
