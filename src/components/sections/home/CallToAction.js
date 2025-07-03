import React from "react";

const CallToAction = () => {
  return (
    <section className="modern-cta">
      <div className="cta-background-animation">
        <div className="animated-circle circle-1"></div>
        <div className="animated-circle circle-2"></div>
        <div className="animated-circle circle-3"></div>
      </div>

      <div className="container">
        <div className="cta-content scroll-animation">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
              <span className="cta-tag">Get Started Today</span>
              <h2 className="cta-heading">Ready to Partner with Geosentry?</h2>
              <p className="cta-text">
                Discover innovative solutions with us! Contact for partnership
                details and unlock the full potential of location-based
                technology.
              </p>
            </div>

            <div className="col-lg-4 text-center text-lg-end">
              <a href="/contact" className="cta-button primary">
                <span>Connect with our experts</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
