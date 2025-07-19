import React from "react";

const Services = () => {
  return (
    <section className="services-section pt-4 pb-4">
      <div className="container">
        <div className="section-title-container scroll-animation">
          {/* <span className="section-subtitle">Our Services</span> */}
          <h2 className="section-title mb-3 h2 fw-bold text-dark">
            Comprehensive{" "}
            <span className="text-gradient">Service Offering</span>
          </h2>
          <p className="section-description">
            Our advanced location-based services help businesses improve
            operational efficiency, enhance customer experiences, and gain
            valuable insights.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-box scroll-animation fade-left delay-1">
              <div className="feature-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="feature-title">GPS Tracking</h3>
              <p className="feature-text">
                Cutting-edge GPS tracking solutions that help you monitor and
                manage your assets, vehicles, and personnel with precision. Gain
                real-time insights, improve security, and optimize your
                operations.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-box scroll-animation delay-2">
              <div className="feature-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3 className="feature-title">Routing API</h3>
              <p className="feature-text">
                Optimized routes with enhanced efficiency in logistics,
                transportation, and field service operations. Our powerful API
                helps you analyze, plan and optimize routes to save time, reduce
                costs, and improve performance.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feature-box scroll-animation fade-right delay-3">
              <div className="feature-icon">
                <i className="fas fa-draw-polygon"></i>
              </div>
              <h3 className="feature-title">Geofencing</h3>
              <p className="feature-text">
                Set up virtual boundaries and control your assets, vehicles, and
                personnel with enhanced security. Get immediate alerts when
                designated zones are breached and manage your resources more
                effectively.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="map-overlay scroll-animation">
          <img
            src="/img/content/map.png"
            className="map-background"
            alt="Global Coverage Map"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Services;
