import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 992 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Helper function to determine if a service link is active
  const isServiceActive = (path) => {
    return (
      location.pathname.startsWith("/service/") &&
      location.pathname.includes(path)
    );
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.style.overflow = "auto"; // Allow scrolling when menu is closed
    } else {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open on mobile
    }
  };

  const toggleServices = (e) => {
    if (windowWidth < 992) {
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    }
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest("nav") &&
        !event.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
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
    setServicesOpen(false);
    document.body.style.overflow = "auto";
  }, [location]);

  const getLogoSize = () => {
    if (windowWidth <= 576) {
      return { maxHeight: "80px", width: "160px" };
    } else {
      return { maxHeight: "120px", width: "220px" };
    }
  };

  return (
    <header className="modern-header">
      <div className={`navbar-modern ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container-fluid px-3 px-lg-5">
          <div className="header-wrapper">
            <div className="logo-container">
              {/* start logo */}
              <Link to="/" className="logo">
                <img
                  src="/img/logos/geosentry-logo-color-390.svg"
                  alt="Geosentry"
                  className="main-logo"
                  style={{ ...getLogoSize(), filter: "none" }}
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
                  <NavLink
                    to="/"
                    onClick={() => windowWidth < 992 && toggleMenu()}
                  >
                    Home
                  </NavLink>
                </li>

                <li
                  className={`has-dropdown ${
                    location.pathname.startsWith("/service/") ? "active" : ""
                  } ${servicesOpen ? "dropdown-open" : ""}`}
                >
                  <span
                    className="dropdown-toggle nav-link-style"
                    onClick={toggleServices}
                    style={{
                      cursor: "pointer",
                      display: "inline-block",
                      padding: "0.5rem 1rem",
                      fontWeight: "500",
                      marginTop: "2px",
                      color:
                        isServiceActive("api-sdk") ||
                        isServiceActive("fleet-management") ||
                        isServiceActive("gps-tracking") ||
                        isServiceActive("geofencing")
                          ? "#007bff"
                          : "#0b2341",
                    }}
                  >
                    Services
                  </span>
                  <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
                    <li
                      className={
                        isServiceActive("fleet-management") ? "active" : ""
                      }
                    >
                      <NavLink
                        to="/service/fleet-management"
                        onClick={() => windowWidth < 992 && toggleMenu()}
                      >
                        Fleet Management
                      </NavLink>
                    </li>
                    <li
                      className={
                        isServiceActive("gps-tracking") ? "active" : ""
                      }
                    >
                      <NavLink
                        to="/service/gps-tracking"
                        onClick={() => windowWidth < 992 && toggleMenu()}
                      >
                        GPS Tracking
                      </NavLink>
                    </li>
                    <li className={isServiceActive("api-sdk") ? "active" : ""}>
                      <NavLink
                        to="/service/api-sdk"
                        onClick={() => windowWidth < 992 && toggleMenu()}
                      >
                        API & SDK Integration
                      </NavLink>
                    </li>

                    {/* <li
                      className={isServiceActive("geofencing") ? "active" : ""}
                    >
                      <NavLink
                        to="/service/geofencing"
                        onClick={() => windowWidth < 992 && toggleMenu()}
                      >
                        Geofencing
                      </NavLink>
                    </li> */}
                  </ul>
                </li>
                <li className={isActive("/pricing") ? "active" : ""}>
                  <NavLink
                    to="/pricing"
                    onClick={() => windowWidth < 992 && toggleMenu()}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className={isActive("/news") ? "active" : ""}>
                  <NavLink
                    to="/news"
                    onClick={() => windowWidth < 992 && toggleMenu()}
                  >
                    News
                  </NavLink>
                </li>
                <li className={isActive("/blogs") ? "active" : ""}>
                  <NavLink
                    to="/blogs"
                    onClick={() => windowWidth < 992 && toggleMenu()}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className={isActive("/about") ? "active" : ""}>
                  <NavLink
                    to="/about"
                    onClick={() => windowWidth < 992 && toggleMenu()}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className={isActive("/contact") ? "active" : ""}>
                  <NavLink
                    to="/contact"
                    className="contact-link"
                    onClick={() => windowWidth < 992 && toggleMenu()}
                  >
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
