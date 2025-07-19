import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PulseGlobe from "../common/PulseGlobe";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Geosentry";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="modern-main">
      {/* Hero Section */}
      <section className="about-hero pb-0">
        <div className="container">
          <div className="row align-items-center mt-3">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <span className="hero-badge">Privacy Policy</span>
                <h1 className="hero-title-large">
                  Protecting Your
                  <span className="text-gradient"> Data and Privacy</span>
                </h1>
                <p className="hero-subtitle">
                  At Geosentry, we are committed to maintaining the trust and
                  confidence of our users. This policy outlines how we collect,
                  use, and protect your personal information.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-cards">
                  <div className="floating-card card-1">
                    <div className="card-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <h4>Data Encryption</h4>
                    <p>End-to-end protection</p>
                  </div>
                  <div className="floating-card card-2">
                    <div className="card-icon">
                      <i className="fas fa-user-lock"></i>
                    </div>
                    <h4>User Control</h4>
                    <p>Manage your privacy settings</p>
                  </div>
                  <div className="floating-card card-3">
                    <div className="card-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h4>Transparency</h4>
                    <p>Clear data usage policies</p>
                  </div>
                </div>
                <PulseGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pt-0">
        <Container>
          <div className="section-heading text-center mb-5">
            <span className="badge rounded-pill bg-primary-soft px-3 py-2 mb-3">
              <i className="fas fa-lock text-primary me-2"></i> Last updated:
              July 2025
            </span>
            <h2 className="display-5 fw-bold">Privacy Policy Overview</h2>
            <div className="heading-line mx-auto"></div>
          </div>{" "}
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="modern-card p-4 p-md-5">
                <h2 className="mb-4 h3">Introduction</h2>
                <p>
                  Welcome to Geosentry! This Privacy Policy outlines how we
                  collect, use, disclose, and protect your personal information
                  when you use our Geo-Services product. By accessing or using
                  Geosentry products, you agree to the terms outlined in this
                  Privacy Policy.
                </p>

                <div className="mt-5">
                  <h3 className="mb-3 h4">Information We Collect</h3>
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-user text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">User-Provided Information</h4>
                      <p className="mb-0">
                        When you use Geosentry Product, we may collect the
                        information you provide voluntarily, such as your name,
                        email address, and location data.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-map-marker-alt text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Location Information</h4>
                      <p className="mb-0">
                        Geosentry relies on location services to provide its
                        features. We may collect and store information about
                        your location, including GPS data and other
                        location-based data. Please note that Geosentry may
                        track your location continuously, including in the
                        background, to provide you with accurate and relevant
                        Geo-Services.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-image text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Gallery Access</h4>
                      <p className="mb-0">
                        With your permission, we may access your device's
                        gallery to allow you to upload and change your profile
                        picture. We only access and use the images you select
                        and approve for this purpose.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="mb-3 h4">How We Use Your Information</h3>
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-location-arrow text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Providing Geo-Services</h4>
                      <p className="mb-0">
                        We use the information collected to deliver and improve
                        our Geo-Services, including location-based features and
                        personalized content.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-map text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Real-Time Location Tracking</h4>
                      <p className="mb-0">
                        The continuous background location tracking is utilized
                        solely to enhance your experience within the app and
                        provide you with relevant Geo-Services. This information
                        is not shared with third parties and is used in
                        accordance with this Privacy Policy.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-user-circle text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Profile Customization</h4>
                      <p className="mb-0">
                        Access to your gallery is used solely for allowing you
                        to upload and change your profile picture within the
                        app.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-chart-bar text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Analytics and Improvements</h4>
                      <p className="mb-0">
                        We may use aggregated and anonymized data for analytics
                        and to enhance functionality and performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="mb-3 h4">Data Sharing and Disclosure</h3>
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-handshake text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Service Providers</h4>
                      <p className="mb-0">
                        Your information might not be disclosed to outside
                        service providers who help us provide and enhance our
                        Geo Services.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-gavel text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Legal Compliance</h4>
                      <p className="mb-0">
                        We may disclose your information if required by law or
                        in response to a valid legal request.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="mb-3 h4">Your Choices</h3>
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-map-marked-alt text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Location Services</h4>
                      <p className="mb-0">
                        You can control location services through your device
                        settings. However, disabling these services may limit
                        the functionality.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-map-pin text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Real-Time Location Tracking</h4>
                      <p className="mb-0">
                        You can control real-time location tracking through your
                        device settings or by turning off location services when
                        the app is not in use.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-images text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Gallery Access</h4>
                      <p className="mb-0">
                        You can control gallery access through your device
                        settings. Disabling gallery access will prevent you from
                        uploading or changing your profile picture within the
                        app.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <i className="fas fa-toggle-off text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">Opt-Out</h4>
                      <p className="mb-0">
                        You can opt-out of certain data collection by adjusting
                        your preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="mb-3 h4">Security</h3>
                  <p>
                    We take reasonable measures to protect your personal
                    information from unauthorized access, use, or disclosure.
                    Our security practices include encryption, access controls,
                    and regular security audits.
                  </p>
                </div>

                <div className="mt-5">
                  <h3 className="mb-3 h4">Changes to This Privacy Policy</h3>
                  <p>
                    We may update this Privacy Policy to reflect changes in our
                    practices. The updated version will be posted on our
                    website, and your continued use of Geosentry constitutes
                    acceptance of the updated terms.
                  </p>
                </div>

                <div className="mt-5">
                  <h3 className="mb-3 h4">Contact Us</h3>
                  <p className="mb-2">
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at:
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-envelope text-primary me-2"></i>
                    <a
                      href="mailto:support@geosentry.ai"
                      className="text-primary"
                    >
                      support@geosentry.ai
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="modern-cta">
        <div className="cta-background-animation">
          <div className="animated-circle circle-1"></div>
          <div className="animated-circle circle-2"></div>
          <div className="animated-circle circle-3"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="row align-items-center">
              <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
                <span className="cta-tag">Have Questions?</span>
                <h2 className="cta-heading">We Value Your Privacy</h2>
                <p className="cta-text">
                  If you have any questions about our privacy practices or would
                  like to learn more about how we protect your data, our team is
                  here to help.
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <a href="/contact" className="cta-button primary">
                  <span>Contact Us</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
