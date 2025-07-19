import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PulseGlobe from "../common/PulseGlobe";

const PricingPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services with Transparent Pricing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="modern-main">
      {/* HERO SECTION WITH MODERN DESIGN */}
      <section className="pricing-hero py-5">
        <div className="container">
          <div className="row align-items-center mt-6">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <span className="hero-badge">Transparent Pricing</span>
                <h1 className="hero-title-large">
                  Flexible Plans for
                  <span className="text-gradient"> Every Business</span>
                </h1>
                <p className="hero-subtitle">
                  Choose from our carefully crafted pricing tiers designed to
                  scale with your business needs. From startups to enterprise,
                  we have the perfect plan for your location intelligence
                  requirements.
                </p>
                <div className="hero-stats mt-5 d-flex flex-wrap">
                  <div className="stat-item me-5 mb-4">
                    <h3 className="stat-number fw-bold">3</h3>
                    <p className="stat-label mb-0 text-muted">Flexible Plans</p>
                  </div>
                  <div className="stat-item me-5 mb-4">
                    <h3 className="stat-number fw-bold">30 Days</h3>
                    <p className="stat-label mb-0 text-muted">Free Trial</p>
                  </div>
                  <div className="stat-item mb-4">
                    <h3 className="stat-number fw-bold">24/7</h3>
                    <p className="stat-label mb-0 text-muted">Support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>Free Tier</h4>
                  <p>Perfect for testing</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-crown"></i>
                  </div>
                  <h4>Premium</h4>
                  <p>Most popular choice</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-gem"></i>
                  </div>
                  <h4>Diamond</h4>
                  <p>Enterprise grade</p>
                </div>
                <PulseGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-table py-6 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h2 className="fw-bold mb-3">Choose Your Plan</h2>
            <p className="text-muted w-md-75 w-lg-60 mx-auto">
              Select the perfect tier that aligns with your business
              requirements
            </p>
          </div>

          {/* start pricing section */}
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card pricing-card h-100 border-0 shadow-sm rounded-4 hover-translate-y">
                <div className="card-header bg-transparent border-0 pt-4 pb-0">
                  <h4 className="fw-bold text-center mb-2">Free Tier</h4>
                  <p className="text-muted text-center">
                    Get started with basic features
                  </p>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled p-0 m-0">
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>10 Users Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>20 GeoFence Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>250,000 API Calls</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>360 GeoEvents Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>30 Subscription Days</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>60s Location Frequency</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>Email Support (Business Hours)</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer border-0 bg-transparent p-4 text-center">
                  <a
                    href="/contact"
                    className="btn btn-outline-primary btn-lg w-100 rounded-pill"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card pricing-card h-100 border-0 shadow rounded-4 border-primary border-2 hover-translate-y">
                <div className="card-header bg-transparent border-0 pt-4 pb-0 position-relative">
                  <span className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2 rounded-pill">
                    Most Popular
                  </span>
                  <h4 className="fw-bold text-center mb-2">Premium Tier</h4>
                  <p className="text-muted text-center">
                    Perfect for growing businesses
                  </p>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled p-0 m-0">
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>100 Users Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>200 GeoFence Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>500,000 API Calls</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>3,600 GeoEvents Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>90 Subscription Days</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>30s Location Frequency</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>Email & Call Support (Business Hours)</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer border-0 bg-transparent p-4 text-center">
                  <a
                    href="/contact"
                    className="btn btn-primary btn-lg w-100 rounded-pill"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card pricing-card h-100 border-0 shadow-sm rounded-4 hover-translate-y">
                <div className="card-header bg-transparent border-0 pt-4 pb-0">
                  <h4 className="fw-bold text-center mb-2">Diamond Tier</h4>
                  <p className="text-muted text-center">
                    For enterprise-level needs
                  </p>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled p-0 m-0">
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>500 Users Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>10,000 GeoFence Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>2,500,000 API Calls</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>36,000 GeoEvents Limit</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>180 Subscription Days</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>30s Location Frequency</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>24/7 Email & Call Support</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer border-0 bg-transparent p-4 text-center">
                  <a
                    href="/contact"
                    className="btn btn-outline-primary btn-lg w-100 rounded-pill"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end pricing section */}
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="modern-cta overflow-visible">
        <div className="cta-background-animation">
          <div className="animated-circle circle-1"></div>
          <div className="animated-circle circle-2"></div>
          <div className="animated-circle circle-3"></div>
        </div>
        <div className="container z-index-9 position-relative">
          <div
            className="row justify-content-center wow fadeIn"
            data-wow-delay=".1s"
          >
            <div className="col-lg-8 col-xl-6 text-center text-white">
              <h2 className="h1 mb-1-9 w-lg-80 mx-auto text-white">
                Need a tailored plan?
              </h2>
              <p>
                One size does not fit all! Reach out if you're looking to tweak
                our plans to fit your implementation. We can offer higher
                limits, or even a plan with no daily limits.
              </p>
              <Link to="/contact" className="butn style-two">
                CONTACT SALES
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/img/content/subscribe2.png"
          className="position-absolute top-n15 left-3 left-xxl-2 d-none d-lg-block wow fadeInLeft"
          data-wow-delay=".2s"
          alt="Subscribe"
        />
        <img
          src="/img/content/subscribe3.png"
          className="position-absolute bottom-n10 right-5 right-xxl-5 z-index-3 d-none d-lg-block wow fadeInRight"
          data-wow-delay=".4s"
          alt="Subscribe"
        />
      </section>
    </main>
  );
};

export default PricingPage;
