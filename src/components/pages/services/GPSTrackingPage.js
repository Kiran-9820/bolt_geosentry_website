import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PulseGlobe from "../../common/PulseGlobe";

const GPSTrackingPage = () => {
  useEffect(() => {
    document.title = "Real-Time GPS Tracking Solutions - Geosentry";
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
                <span className="hero-badge">GPS Technology</span>
                <h1 className="hero-title-large">
                  Real-Time GPS Tracking
                  <span className="text-gradient"> Solutions</span>
                </h1>
                <p className="hero-subtitle">
                  Powerful live tracking with advanced analytics and reporting
                  for any industry. Get pinpoint accuracy and complete
                  visibility of your assets in real-time.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-crosshairs"></i>
                  </div>
                  <h4>Pinpoint Precision</h4>
                  <p>Accurate location data</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h4>Mobile Control</h4>
                  <p>Track from anywhere</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-bell"></i>
                  </div>
                  <h4>Instant Alerts</h4>
                  <p>Real-time notifications</p>
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
                  src="/img/content/gps-tracking.png"
                  alt="GPS Tracking"
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
                <span className="subtitle">Precision Technology</span>
                <h2>
                  What is Real-time{" "}
                  <span className="text-gradient">GPS Tracking </span>?
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Geosentry provides real-time GPS tracking, which is similar to
                having a high-tech map that shows you where vehicles, important
                items, or people are right now.
              </p>
              <p>
                Our system constantly updates you on their specific location,
                allowing you to better manage their situation, keep them safe,
                and make wiser decisions. It helps ensure that important
                information gets to the appropriate location, and it also helps
                you understand movement patterns for better resource allocation
                and planning.
              </p>
              <div className="mt-4">
                <Link to="/contact" className="cta-button primary me-3">
                  <span>Request a Demo</span>
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
                <h2>
                  Advanced <span className="text-gradient">GPS Tracking </span>{" "}
                  Features
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our GPS tracking solutions come packed with features designed to
                give you complete visibility and control
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-plug"></i>
                  </div>
                  <h3 className="card-title h5">Effortless Deployment</h3>
                  <p className="card-text">
                    Geosentry's GPS trackers function like plug-and-play
                    devices, allowing for quick installation in just a few
                    minutes without the need for specialized hardware or
                    software.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-crosshairs"></i>
                  </div>
                  <h3 className="card-title h5">Pinpoint Precision</h3>
                  <p className="card-text">
                    Our trackers provide highly accurate location data with
                    pinpoint precision, ensuring hassle-free and actionable
                    insights for effective monitoring and management.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3 className="card-title h5">Mobile App Control</h3>
                  <p className="card-text">
                    Geosentry's smart mobile app lets you effortlessly handle
                    your trackers and stay connected to real-time information
                    while on the move, with customizable alerts and
                    notifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-car"></i>
                  </div>
                  <h3 className="card-title h5">Vehicle Management</h3>
                  <p className="card-text">
                    Track the location of your vehicles, view their speed and
                    direction, and get alerts for speed limits or restricted
                    areas to improve fleet efficiency and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Content Section */}
      <section className="py-5 bg-light-grey" id="precision">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>
                  Pinpoint <span className="text-gradient">Precision</span>{" "}
                  Tracking
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our GPS tracking technology provides unmatched accuracy, with
                location updates that are precise to within a few meters. This
                level of detail is crucial for businesses that require exact
                positioning of their assets or personnel.
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
                      <h5 className="h6">High-Accuracy GPS</h5>
                      <p className="mb-0">
                        Location accuracy within 2-3 meters even in challenging
                        environments.
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
                      <h5 className="h6">Multi-satellite Connectivity</h5>
                      <p className="mb-0">
                        Connects to multiple satellite networks to ensure
                        consistent coverage.
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
                      <h5 className="h6">Advanced Filtering</h5>
                      <p className="mb-0">
                        Intelligent algorithms filter out erroneous data points
                        for reliable tracking.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 order-1 order-lg-2">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/precision.jpg")}
                  alt="Precision GPS Tracking"
                  className="rounded-10 shadow-hover img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="mobile">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/mobile-control.jpg")}
                  alt="Mobile App Control"
                  className="rounded-10 shadow-hover img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>
                  Admin <span className="text-gradient">Mobile App</span>{" "}
                  Control
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our intuitive mobile application puts the power of GPS tracking
                in your pocket. Access real-time information about your assets
                from anywhere, at any time, with an interface designed for ease
                of use and maximum functionality.
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
                      <h5 className="h6">Real-time Notifications</h5>
                      <p className="mb-0">
                        Receive instant alerts about important events directly
                        on your smartphone.
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
                      <h5 className="h6">Custom Geofence Creation</h5>
                      <p className="mb-0">
                        Create virtual boundaries directly from your phone and
                        set rules for each zone.
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
                      <h5 className="h6">Comprehensive Dashboard</h5>
                      <p className="mb-0">
                        Access all critical tracking information from a single,
                        intuitive dashboard.
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
      <section className="py-5 bg-primary-soft" id="use-cases">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <div className="section-heading mb-4">
                <span className="subtitle">Applications</span>
                <h2>
                  <span className="text-gradient">GPS Tracking</span> Use Cases
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Discover how our GPS tracking solutions are transforming
                operations across various industries
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-truck fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Fleet Management</h3>
                  <p className="card-text">
                    Track and manage commercial vehicles, optimize routes,
                    monitor driver behavior, and reduce operational costs for
                    logistics and transportation businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-briefcase fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Asset Tracking</h3>
                  <p className="card-text">
                    Keep tabs on valuable equipment, tools, and assets to
                    prevent theft, optimize utilization, and streamline
                    inventory management.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-people-carry fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Field Service Management</h3>
                  <p className="card-text">
                    Track and dispatch field service teams efficiently, provide
                    accurate ETAs to customers, and optimize schedules based on
                    location data.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-shopping-basket fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Delivery Services</h3>
                  <p className="card-text">
                    Provide customers with real-time tracking of their
                    deliveries, optimize delivery routes, and improve last-mile
                    delivery efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-bus fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Public Transportation</h3>
                  <p className="card-text">
                    Track buses, trains, and other public transport vehicles to
                    provide passengers with accurate arrival times and improve
                    service quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-shield-alt fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Security Services</h3>
                  <p className="card-text">
                    Track security personnel and vehicles for improved response
                    times, better coverage, and enhanced safety measures for
                    protected locations.
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
                <h2 className="cta-heading">Ready to Track with Precision?</h2>
                <p className="cta-text">
                  Start monitoring your assets with Geosentry's advanced GPS
                  tracking solutions. Our experts are ready to help you
                  implement powerful location features.
                </p>
              </div>

              <div className="col-lg-4 text-center text-lg-end">
                <Link to="/contact" className="cta-button primary">
                  <span>Request a Demo</span>
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

export default GPSTrackingPage;
