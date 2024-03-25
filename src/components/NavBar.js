import React from "react";
import "../css/navbar.css";

function NavBar() {
  return (
    <nav className="navBar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      
    </nav>
  );
}

export default NavBar;