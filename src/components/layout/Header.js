import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest("nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="modern-header">
      <div className={`navbar-modern ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container-fluid px-4 px-lg-5">
          <div className="header-wrapper">
            <div className="logo-container">
              {/* start logo */}
              <Link to="/" className="logo">
                <img
                  src="/img/logos/geosentry-logo-color-390.svg"
                  alt="Geosentry"
                  className="main-logo"
                  style={{ maxHeight: "120px", width: "220px", filter: "none" }}
                />
              </Link>
              {/* end logo */}
            </div>

            <button
              className={`menu-toggle ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* start menu area */}
            <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
              <ul className="nav-links">
                <li className={isActive("/") ? "active" : ""}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className={isActive("/about") ? "active" : ""}>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li className={isActive("/service") ? "active" : ""}>
                  <NavLink to="/service">Services</NavLink>
                </li>
                <li className={isActive("/pricing") ? "active" : ""}>
                  <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li className={isActive("/news") ? "active" : ""}>
                  <NavLink to="/news">News</NavLink>
                </li>
                <li className={isActive("/blogs") ? "active" : ""}>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li className={isActive("/contact") ? "active" : ""}>
                  <NavLink to="/contact" className="contact-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
