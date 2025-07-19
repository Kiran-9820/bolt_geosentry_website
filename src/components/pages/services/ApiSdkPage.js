import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PulseGlobe from "../../common/PulseGlobe";

const ApiSdkPage = () => {
  useEffect(() => {
    document.title = "API & SDK Integration Solutions - Geosentry";
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
                <span className="hero-badge">Developer Tools</span>
                <h1 className="hero-title-large">
                  API & SDK Integration
                  <span className="text-gradient"> Solutions</span>
                </h1>
                <p className="hero-subtitle">
                  Seamlessly integrate location intelligence into your
                  applications with our developer-friendly tools. Build powerful
                  location-based features with minimal effort.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                  <h4>RESTful API</h4>
                  <p>Clean endpoints</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h4>Mobile SDKs</h4>
                  <p>Native integration</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <h4>Documentation</h4>
                  <p>Complete guides</p>
                </div>
                <PulseGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pt-0 pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-4">
              <div className="position-relative">
                <img
                  src="/img/content/api-and-sdk.png"
                  alt="API & SDK Integration"
                  className="rounded-10 shadow-hover img-fluid"
                />
                <div
                  className="bg-primary-soft position-absolute rounded-circle p-5 d-none d-sm-block"
                  style={{
                    width: "70px",
                    height: "70px",
                    top: "-20px",
                    right: "-20px",
                    zIndex: "-1",
                  }}
                ></div>
                <div
                  className="bg-secondary-soft position-absolute rounded-circle p-5 d-none d-sm-block"
                  style={{
                    width: "50px",
                    height: "50px",
                    bottom: "-15px",
                    left: "-15px",
                    zIndex: "-1",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="section-heading mb-4">
                <span className="subtitle">Developer Tools</span>
                <h2>What are API & SDK Integration Solutions?</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our API and SDK solutions provide developers with the tools to
                seamlessly integrate Geosentry's powerful location services into
                their own applications.
              </p>
              <p>
                Whether you're building a mobile app, web platform, or
                enterprise solution, our developer tools allow you to embed
                fleet management, GPS tracking, and geofencing capabilities
                directly into your software. With comprehensive documentation,
                code samples, and expert support, implementing location
                intelligence has never been easier.
              </p>
              <div className="mt-4">
                <Link to="/contact" className="cta-button primary me-3">
                  <span>Request API Access</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <div className="section-heading mb-4">
                <span className="subtitle">Key Features</span>
                <h2>Developer-friendly Integration Tools</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our integration solutions provide everything developers need to
                add powerful location capabilities to their applications
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                  <h3 className="card-title h5">RESTful API</h3>
                  <p className="card-text">
                    Our RESTful API provides secure, reliable access to location
                    services with comprehensive endpoints for tracking,
                    geofencing, and analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 className="card-title h5">Mobile SDKs</h3>
                  <p className="card-text">
                    Native SDKs for iOS and Android make it simple to add
                    location tracking, geofencing, and analytics to your mobile
                    applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <h3 className="card-title h5">Extensive Documentation</h3>
                  <p className="card-text">
                    Comprehensive guides, API reference, code examples, and
                    tutorials to help developers quickly implement our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h3 className="card-title h5">Developer Support</h3>
                  <p className="card-text">
                    Expert technical assistance through our developer portal,
                    with dedicated support for enterprise customers and
                    implementation services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Content Section */}
      <section className="py-5 bg-light-grey" id="api">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>RESTful API for Location Services</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our API is built with developers in mind, featuring clean,
                consistent endpoints and comprehensive documentation. Access all
                of Geosentry's location services programmatically to build
                powerful custom applications.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3">
                  <div className="d-flex">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h5 className="h6">Secure Authentication</h5>
                      <p className="mb-0">
                        OAuth 2.0 authentication and API key management for
                        secure access control.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h5 className="h6">Comprehensive Endpoints</h5>
                      <p className="mb-0">
                        Access tracking data, manage geofences, and analyze
                        movement patterns via API calls.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h5 className="h6">Webhooks & Events</h5>
                      <p className="mb-0">
                        Receive real-time notifications when important location
                        events occur.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 order-1 order-lg-2">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/api.jpg")}
                  alt="API Integration"
                  className="rounded-10 shadow-hover img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="sdk">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/native-sdk.jpg")}
                  alt="Mobile SDKs"
                  className="rounded-10 shadow-hover img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>Native Mobile SDKs</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our SDKs for iOS and Android enable developers to add powerful
                location tracking and geofencing capabilities to mobile
                applications with minimal effort. Optimized for battery life and
                accuracy, our SDKs ensure a great user experience.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3">
                  <div className="d-flex">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h5 className="h6">Battery-Efficient Tracking</h5>
                      <p className="mb-0">
                        Smart algorithms balance tracking accuracy with battery
                        consumption.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h5 className="h6">Background Tracking</h5>
                      <p className="mb-0">
                        Maintain location awareness even when apps are running
                        in the background.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <div className="me-3">
                      <span
                        className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </span>
                    </div>
                    <div>
                      <h5 className="h6">Offline Capability</h5>
                      <p className="mb-0">
                        Store tracking data when offline and sync automatically
                        when connectivity returns.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-5" id="use-cases">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <div className="section-heading mb-4">
                <span className="subtitle">Applications</span>
                <h2>API & SDK Integration Use Cases</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Discover how developers are using our integration tools to build
                powerful location-based applications
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-mobile-alt fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">On-Demand Services</h3>
                  <p className="card-text">
                    Build ride-sharing, food delivery, or service booking apps
                    with real-time location tracking and ETA calculations for
                    customers and service providers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-tasks fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Workforce Management</h3>
                  <p className="card-text">
                    Integrate location tracking into workforce management
                    systems to optimize field operations, track time on site,
                    and automate reporting.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-chart-line fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Business Intelligence</h3>
                  <p className="card-text">
                    Enhance business intelligence platforms with location
                    analytics to identify patterns, optimize resource
                    allocation, and improve operational efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-shopping-cart fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Retail & E-commerce</h3>
                  <p className="card-text">
                    Add location-based features to retail apps, such as store
                    locators, in-store navigation, and location-based promotions
                    to enhance the shopping experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-heartbeat fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Healthcare</h3>
                  <p className="card-text">
                    Develop healthcare applications with location tracking for
                    medical equipment, patient transport, and home healthcare
                    services to improve care coordination.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-box fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Supply Chain Management</h3>
                  <p className="card-text">
                    Enhance supply chain applications with real-time tracking of
                    shipments, inventory management, and automated alerts for
                    logistics operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <span className="cta-tag">Get Started Today</span>
                <h2 className="cta-heading">Ready to Start Developing?</h2>
                <p className="cta-text">
                  Get API access and start building with Geosentry's location
                  services today. Our experts are ready to help you implement
                  powerful location features.
                </p>
              </div>

              <div className="col-lg-4 text-center text-lg-end">
                <Link to="/contact" className="cta-button primary">
                  <span>Request API Access</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApiSdkPage;
