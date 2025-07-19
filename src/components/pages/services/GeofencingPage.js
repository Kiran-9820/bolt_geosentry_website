import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PulseGlobe from "../../common/PulseGlobe";

const GeofencingPage = () => {
  useEffect(() => {
    document.title = "Customizable Geofencing Solutions - Geosentry";
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
                <span className="hero-badge">Virtual Boundaries</span>
                <h1 className="hero-title-large">
                  Customizable Geofencing
                  <span className="text-gradient"> Solutions</span>
                </h1>
                <p className="hero-subtitle">
                  Create virtual boundaries around your locations and receive
                  instant alerts when assets enter or exit. Monitor and control
                  geographic areas with precision.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-draw-polygon"></i>
                  </div>
                  <h4>Custom Zones</h4>
                  <p>Flexible boundary creation</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-bell"></i>
                  </div>
                  <h4>Smart Alerts</h4>
                  <p>Instant notifications</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4>Enhanced Security</h4>
                  <p>Asset protection</p>
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
                  src="/img/content/customizable-Geofencing.png"
                  alt="Geofencing"
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
                <span className="subtitle">Virtual Boundaries</span>
                <h2>What is Customizable Geofencing?</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Customizable Geofencing with Geosentry is a cutting-edge
                technology that allows organizations to establish and control
                virtual borders around physical locations on a map.
              </p>
              <p>
                With this technology, companies can automate what happens when
                something enters or exits specific locations. Geofencing enables
                you to create digital perimeters that trigger alerts, track
                movements, and gather valuable data about how assets, vehicles,
                or personnel interact with defined geographic areas.
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
                <h2>Advanced Geofencing Capabilities</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our geofencing solution provides powerful features to help you
                monitor and control your geographic boundaries
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-draw-polygon"></i>
                  </div>
                  <h3 className="card-title h5">Custom Zone Creation</h3>
                  <p className="card-text">
                    Create custom zones of any shape or size to track and
                    monitor specific areas, such as loading zones, restricted
                    areas, or even the perimeter of your property.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-bell"></i>
                  </div>
                  <h3 className="card-title h5">Instant Alerts</h3>
                  <p className="card-text">
                    Receive instant notifications when tracked assets enter or
                    leave your designated zones, allowing you to respond quickly
                    to important events.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-lock"></i>
                  </div>
                  <h3 className="card-title h5">Enhanced Security</h3>
                  <p className="card-text">
                    Boost security by setting up alerts for unauthorized entry
                    or exit within designated zones, safeguarding assets and
                    ensuring prompt notification of irregularities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                  <h3 className="card-title h5">Data Insights</h3>
                  <p className="card-text">
                    Gather valuable data on how people and assets navigate your
                    geo-space to boost efficiency, spot potential issues, and
                    optimize your geo-space usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Content Section */}
      <section className="py-5 bg-light-grey" id="customzones">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>Custom Zone Creation</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our geofencing technology allows you to create virtual
                boundaries with incredible flexibility. You can design custom
                shapes, set time-based rules, and even create nested geofences
                for complex security or operational needs.
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
                      <h5 className="h6">Flexible Shapes</h5>
                      <p className="mb-0">
                        Create circles, polygons, or custom shapes to precisely
                        define your boundaries.
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
                      <h5 className="h6">Time-based Rules</h5>
                      <p className="mb-0">
                        Set geofences that are active only during specific times
                        or days of the week.
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
                      <h5 className="h6">Multiple Zones</h5>
                      <p className="mb-0">
                        Create unlimited geofences and organize them by groups
                        or categories.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 order-1 order-lg-2">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/geofence.jpg")}
                  alt="Custom Zone Creation"
                  className="rounded-10 shadow-hover img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="alerts">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/geoEvent.jpg")}
                  alt="Instant Alerts"
                  className="rounded-10 shadow-hover img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>Real-time Alert System</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our advanced alert system ensures you're immediately notified
                when tracked objects or personnel enter or exit your defined
                geofences. Configure custom notifications through multiple
                channels to stay informed wherever you are.
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
                      <h5 className="h6">Multiple Notification Channels</h5>
                      <p className="mb-0">
                        Receive alerts via email, SMS, push notifications, or
                        in-app messages.
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
                      <h5 className="h6">Customizable Alert Types</h5>
                      <p className="mb-0">
                        Define entry alerts, exit alerts, or dwell-time alerts
                        based on your needs.
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
                      <h5 className="h6">Automated Workflows</h5>
                      <p className="mb-0">
                        Trigger automated actions when geofence events occur,
                        such as logging entries or updating systems.
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
                <h2>Geofencing Use Cases</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Discover how our geofencing solutions can benefit various
                industries and applications
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-truck-loading fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Construction Sites</h3>
                  <p className="card-text">
                    Monitor equipment movement, prevent unauthorized removals,
                    ensure worker safety by defining hazardous areas, and track
                    material deliveries with precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-warehouse fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Warehouse Management</h3>
                  <p className="card-text">
                    Optimize warehouse operations by tracking goods movement,
                    monitoring loading dock activity, and ensuring proper asset
                    placement within designated areas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-store fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Retail Marketing</h3>
                  <p className="card-text">
                    Send targeted offers to customers when they enter your
                    store, track foot traffic patterns, and analyze customer
                    dwell times in different departments.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-hard-hat fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Field Service Management</h3>
                  <p className="card-text">
                    Verify that technicians arrive at job sites, track time
                    spent at locations, and automate job status updates based on
                    geofence entries and exits.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-school fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">School Safety</h3>
                  <p className="card-text">
                    Create safety zones around schools, monitor student
                    transportation, receive alerts if school buses deviate from
                    routes, and ensure authorized pickups.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <i className="fas fa-truck fa-2x text-primary"></i>
                  </div>
                  <h3 className="card-title h5">Fleet Management</h3>
                  <p className="card-text">
                    Monitor vehicle locations, detect unauthorized usage after
                    hours, ensure drivers follow assigned routes, and manage
                    delivery zones efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights Section */}
      <section className="py-5" id="insights">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>Powerful Data Insights</h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Transform raw geofence data into actionable business
                intelligence. Our analytics tools help you visualize patterns,
                identify trends, and make informed decisions based on location
                data.
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
                      <h5 className="h6">Movement Pattern Analysis</h5>
                      <p className="mb-0">
                        Identify common routes, bottlenecks, and opportunities
                        for optimization.
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
                      <h5 className="h6">Dwell Time Reports</h5>
                      <p className="mb-0">
                        Measure and analyze how long assets remain within
                        specific zones.
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
                      <h5 className="h6">Historical Comparison</h5>
                      <p className="mb-0">
                        Compare current movement patterns with historical data
                        to identify changes or trends.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 order-1 order-lg-2">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/data-insights.jpg")}
                  alt="Data Insights"
                  className="rounded-10 shadow-hover img-fluid"
                />
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
                <h2 className="cta-heading">Ready to Set Your Boundaries?</h2>
                <p className="cta-text">
                  Get started with Geosentry's customizable geofencing solutions
                  today. Our experts are ready to help you implement powerful
                  location features.
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

export default GeofencingPage;
