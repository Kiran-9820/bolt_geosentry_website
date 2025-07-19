import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PulseGlobe from "../../common/PulseGlobe";

const FleetManagementPage = () => {
  useEffect(() => {
    document.title = "Fleet Management Solutions - Geosentry";
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
                <span className="hero-badge">AI-Powered Fleet</span>
                <h1 className="hero-title-large">
                  Streamlined Fleet
                  <span className="text-gradient"> Management Solutions</span>
                </h1>
                <p className="hero-subtitle">
                  Optimize your fleet operations with our AI-powered management
                  system, built on Google Cloud Platform. Get complete control
                  and visibility over your entire vehicle fleet.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <h4>Real-time Tracking</h4>
                  <p>Live fleet visibility</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-route"></i>
                  </div>
                  <h4>Route Optimization</h4>
                  <p>Efficient path planning</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  <h4>Maintenance Alerts</h4>
                  <p>Proactive vehicle care</p>
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
                  src="/img/content/fleet-management-3.png"
                  alt="Fleet Management"
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
                <span className="subtitle">AI-Powered Management</span>
                <h2>
                  What is Streamlined{" "}
                  <span className="text-gradient">Fleet Management?</span>
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Geosentry leverages state-of-the-art AI technology for
                effortless fleet management, allowing precise tracking and
                maintenance of a diverse array of vehicles.
              </p>
              <p>
                This advanced approach optimizes efficiency, saving both time
                and costs with innovative technological solutions. Designed for
                businesses of all sizes, our fleet management solutions provide
                you with comprehensive control and visibility over your entire
                vehicle fleet.
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
              <div className="section-heading  mb-4">
                <span className="subtitle">Key Features</span>
                <h2>
                  Comprehensive{" "}
                  <span className="text-gradient">Fleet Management</span>{" "}
                  Features
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p
                className="mx-auto mb-0 text-secondary"
                style={{ maxWidth: "800px" }}
              >
                Discover how our comprehensive suite of fleet management
                features can transform your operations
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <h3 className="card-title h5">Real-time Vehicle Tracking</h3>
                  <p className="card-text">
                    Geosentry utilizes GPS technology for continuous, real-time
                    tracking of your fleet's vehicles. This enhances operational
                    safety, optimizes routes for efficiency, and monitors
                    driving patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-route"></i>
                  </div>
                  <h3 className="card-title h5">Route Optimization</h3>
                  <p className="card-text">
                    Save time and fuel with intelligent route planning. Our
                    software uses historical data to calculate the most
                    efficient routes, taking into account traffic conditions,
                    road closures, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-tools"></i>
                  </div>
                  <h3 className="card-title h5">Maintenance Alerts</h3>
                  <p className="card-text">
                    Receive timely notifications when vehicles require
                    maintenance, helping prevent breakdowns and maximize vehicle
                    lifespan with proactive maintenance scheduling.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="modern-card h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon mb-4">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="card-title h5">Reports and Analytics</h3>
                  <p className="card-text">
                    Utilize data-driven insights to make intelligent decisions.
                    Examine essential metrics to optimize the overall efficiency
                    of your vehicles and operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light-grey" id="tracking">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>
                  Real-time{" "}
                  <span className="text-gradient">Vehicle Tracking</span>
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our real-time GPS tracking technology provides second-by-second
                updates on your vehicles' locations, speed, and status. The
                system works across various terrains and environments, ensuring
                you always have visibility of your fleet.
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
                      <h5 className="h6">Live Location Updates</h5>
                      <p className="mb-0">
                        Receive continuous updates on your vehicles' locations
                        with minimal delay.
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
                      <h5 className="h6">Speed and Direction Monitoring</h5>
                      <p className="mb-0">
                        Track vehicle speed and direction to ensure safety
                        compliance and optimal routing.
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
                      <h5 className="h6">Accurate Vehicle Status</h5>
                      <p className="mb-0">
                        Monitor engine status, fuel consumption, and other vital
                        metrics in real-time.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 order-1 order-lg-2">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/gps.jpg")}
                  alt="Real-time Vehicle Tracking"
                  className="rounded-10 shadow-hover img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="routing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img
                  src={require("../../../assets/img/banner/tracking.png")}
                  alt="Route Optimization"
                  className="rounded-10 shadow-hover img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="section-heading mb-4">
                <span className="subtitle">Feature Highlight</span>
                <h2>
                  Intelligent{" "}
                  <span className="text-gradient">Route Optimization</span>
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
              <p>
                Our route optimization technology uses advanced algorithms to
                determine the most efficient paths for your vehicles, taking
                into account multiple factors such as traffic conditions, road
                works, weather, and delivery constraints.
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
                      <h5 className="h6">Multi-stop Route Planning</h5>
                      <p className="mb-0">
                        Efficiently organize routes with multiple stops to
                        maximize productivity.
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
                      <h5 className="h6">Real-time Traffic Integration</h5>
                      <p className="mb-0">
                        Automatically adjust routes based on current traffic
                        conditions to avoid delays.
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
                      <h5 className="h6">Fuel Consumption Optimization</h5>
                      <p className="mb-0">
                        Reduce fuel costs by calculating the most economical
                        routes for your fleet.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-gradient-primary" id="benefits">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-2">
              <div className="section-heading">
                <h2>
                  Why Choose Our{" "}
                  <span className="text-gradient"> Fleet Management </span>
                </h2>
                <div className="heading-line mx-auto"></div>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md-6 col-lg-4">
              <div className="bg-white-10 rounded-10 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="fas fa-dollar-sign text-primary"></i>
                  </div>
                  <h4 className="h5 mb-0">Cost Reduction</h4>
                </div>
                <p className="mb-0">
                  Reduce operational costs through optimized routes, lower fuel
                  consumption, and preventive maintenance that extends vehicle
                  lifespan.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bg-white-10 rounded-10 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="fas fa-tachometer-alt text-primary"></i>
                  </div>
                  <h4 className="h5 mb-0">Increased Efficiency</h4>
                </div>
                <p className="mb-0">
                  Enhance operational efficiency with streamlined dispatching,
                  optimized routes, and reduced vehicle downtime.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bg-white-10 rounded-10 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="fas fa-user-shield text-primary"></i>
                  </div>
                  <h4 className="h5 mb-0">Enhanced Safety</h4>
                </div>
                <p className="mb-0">
                  Promote safer driving with speed monitoring, driver behavior
                  tracking, and regular maintenance alerts.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bg-white-10 rounded-10 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="fas fa-chart-bar text-primary"></i>
                  </div>
                  <h4 className="h5 mb-0">Data-Driven Decisions</h4>
                </div>
                <p className="mb-0">
                  Make informed decisions based on comprehensive analytics and
                  reporting on your fleet performance.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bg-white-10 rounded-10 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="fas fa-smile text-primary"></i>
                  </div>
                  <h4 className="h5 mb-0">Customer Satisfaction</h4>
                </div>
                <p className="mb-0">
                  Improve customer experience with accurate ETAs, efficient
                  delivery routes, and reliable service.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="bg-white-10 rounded-10 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className="fas fa-leaf text-primary"></i>
                  </div>
                  <h4 className="h5 mb-0">Environmental Impact</h4>
                </div>
                <p className="mb-0">
                  Reduce your carbon footprint through optimized routes, reduced
                  fuel consumption, and improved vehicle efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Updated with the new design */}
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
                <h2 className="cta-heading">
                  Ready to Optimize Your Fleet Operations?
                </h2>
                <p className="cta-text">
                  Get started with Geosentry's comprehensive fleet management
                  solutions today and transform the way you manage your
                  vehicles.
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

export default FleetManagementPage;
