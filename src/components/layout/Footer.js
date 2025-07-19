import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
  };

  const iconBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contactTextStyle = {
    display: "flex",
    alignItems: "center",
    margin: 0,
  };

  return (
    <footer className="modern-footer">
      <div className="footer-main">
        <Container>
          <Row className="footer-content">
            <Col lg={4} md={6} className="mb-5 mb-md-4 mb-lg-0">
              <div className="footer-about">
                <Link to="/" className="logo">
                  <img
                    src="/img/logos/geosentry-logo-white-390.svg"
                    alt="Geosentry"
                    className="main-logo"
                    style={{
                      maxHeight: "150px",
                      width: "250px",
                      marginBottom: "20px",
                    }}
                  />
                </Link>
                <p className="about-text">
                  Transforming location-based services with AI-powered solutions
                  for GPS tracking, optimal routing, and geofencing on Google
                  Cloud Platform.
                </p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/geosentryai"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://twitter.com/geosentry_ai"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a
                    href="https://www.instagram.com/geosentry_ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/geosentry-ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} className="mb-5 mb-md-4 mb-lg-0">
              <div className="footer-links">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="links-list">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/service/fleet-management">Services</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/video">Media</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-5 mb-md-0">
              <div className="footer-contact">
                <h4 className="footer-title">Contact Us</h4>
                <ul className="contact-list">
                  <li className="contact-item" style={contactItemStyle}>
                    <div className="icon-box" style={iconBoxStyle}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-text">
                      <p style={contactTextStyle}>+91 91138-21395</p>
                    </div>
                  </li>
                  <li className="contact-item" style={contactItemStyle}>
                    <div className="icon-box" style={iconBoxStyle}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <p style={contactTextStyle}>support@geosentry.ai</p>
                    </div>
                  </li>
                  <li className="contact-item" style={contactItemStyle}>
                    <div
                      className="icon-box"
                      style={{
                        ...iconBoxStyle,
                        alignSelf: "flex-start",
                        paddingTop: "3px",
                      }}
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-text">
                      <p>
                        #15, 3rd Cross Jabbar Block PG Halli Vyalikaval Extn
                        Bangalore North Bangalore Karnataka - 560003 India
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="footer-newsletter">
                <h4 className="footer-title">Newsletter</h4>
                <p>
                  Subscribe to our newsletter to receive updates on our services
                  and features.
                </p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                    <button type="submit" className="submit-btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
                <div className="mt-4">
                  <Link to="/privacy-policy" className="privacy-link">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <div className="copyright">
            <p>
              &copy; {currentYear} Geosentry Private Limited. All rights
              reserved
            </p>
          </div>
        </Container>
      </div>

      <a href="#!" className="scroll-to-top">
        <i className="fas fa-chevron-up"></i>
      </a>

      <div className="footer-shape"></div>
    </footer>
  );
};

export default Footer;
