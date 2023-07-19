import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          educa.
        </a>
        <nav className={`navbar-list ${menuOpen ? "hide" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#teachers">Teachers</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <nav
          ref={navbarRef}
          className={`navbar ${menuOpen ? "open" : ""}`}
          style={{ display: menuOpen ? "block" : "none" }}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#teachers">Teachers</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          id="menu-btn"
          onClick={handleMenuToggle}
          style={{ transform: menuOpen ? "rotate(180deg)" : "none" }}
        />
      </section>
    </header>
  );
};

export default Navbar;
