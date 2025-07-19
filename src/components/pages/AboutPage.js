import React, { useEffect } from "react";
import PulseGlobe from "../common/PulseGlobe";

const AboutPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Advanced Fleet Management, Geofencing, and Geo Tracking";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="modern-main">
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center mt-4">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <span className="hero-badge">About Geosentry</span>
                <h1 className="hero-title-large">
                  Pioneering the Future of
                  <span className="text-gradient"> Location Intelligence</span>
                </h1>
                <p className="hero-subtitle">
                  We're not just a tech company—we're visionaries reshaping how
                  businesses interact with location data through cutting-edge AI
                  and cloud technology.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">50K+</h3>
                    <p className="stat-label">API Calls Daily</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">99.9%</h3>
                    <p className="stat-label">Uptime</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">100+</h3>
                    <p className="stat-label">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1" style={{ opacity: 0.9 }}>
                  <div className="card-icon">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <h4>Geofencing</h4>
                  <p>Smart boundary detection</p>
                </div>
                <div className="floating-card card-2" style={{ opacity: 0.9 }}>
                  <div className="card-icon">
                    <i className="fas fa-route"></i>
                  </div>
                  <h4>Route Optimization</h4>
                  <p>AI-powered navigation</p>
                </div>
                <div className="floating-card card-3" style={{ opacity: 0.9 }}>
                  <div className="card-icon">
                    <i className="fas fa-satellite-dish"></i>
                  </div>
                  <h4>Real-time Tracking</h4>
                  <p>Live location updates</p>
                </div>
                <PulseGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="story-section pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="story-content">
                <div className="section-header text-center mb-5">
                  <span className="hero-badge">Our Story</span>
                  <h2 className="story-section-title">
                    From Vision to Innovation
                  </h2>
                  <div className="title-underline"></div>
                </div>

                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>The Spark</h4>
                      <p>
                        Born from the need to simplify complex location-based
                        services, Geosentry emerged as a solution to bridge the
                        gap between traditional GPS systems and modern AI
                        capabilities.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Building the Foundation</h4>
                      <p>
                        Leveraging Google Cloud Platform's robust
                        infrastructure, we developed APIs that transform raw
                        location data into actionable business intelligence.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>Driving Success</h4>
                      <p>
                        Today, we empower businesses across industries with
                        cutting-edge geofencing, route optimization, and
                        real-time tracking solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values-section pt-5 pb-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="hero-badge">Our Values</span>
            <h2 className="values-section-title">What Drives Us Forward</h2>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="value-card h-100">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation First</h3>
                <p>
                  We constantly push boundaries, exploring new technologies and
                  methodologies to deliver groundbreaking solutions.
                </p>
                <div className="card-accent"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="value-card h-100">
                <div className="value-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Unmatched Reliability</h3>
                <p>
                  Our 99.9% uptime guarantee ensures your business operations
                  never skip a beat, backed by enterprise-grade infrastructure.
                </p>
                <div className="card-accent"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="value-card h-100">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>True Partnership</h3>
                <p>
                  We don't just provide services—we become your technology
                  partner, invested in your long-term success and growth.
                </p>
                <div className="card-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SHOWCASE */}
      <section className="tech-showcase pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="tech-content">
                <span className="hero-badge">Technology Stack</span>
                <h2 className="tech-section-title">
                  Built on Industry-Leading Platforms
                </h2>
                <div className="heading-line mx-auto mb-4"></div>

                <p className="tech-description">
                  Our solutions are powered by Google Cloud Platform's advanced
                  infrastructure, combined with cutting-edge AI algorithms and
                  real-time data processing capabilities.
                </p>

                <div className="tech-features">
                  <div className="feature-item">
                    <i className="fab fa-google"></i>
                    <span>Google Cloud Platform Integration</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-brain"></i>
                    <span>Machine Learning & AI</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-shield-alt"></i>
                    <span>Enterprise-Grade Security</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-sync-alt"></i>
                    <span>Real-time Data Processing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tech-visual">
                <div className="tech-stack-grid">
                  <div className="tech-item">
                    <i
                      className="fab fa-google"
                      style={{ fontSize: "60px", color: "#4285f4" }}
                    ></i>
                    <h5 className="mt-3">Google Cloud</h5>
                  </div>
                  <div className="tech-item">
                    <i
                      className="fas fa-brain"
                      style={{ fontSize: "60px", color: "#0063ff" }}
                    ></i>
                    <h5 className="mt-3">AI/ML</h5>
                  </div>
                  <div className="tech-item">
                    <i
                      className="fas fa-code"
                      style={{ fontSize: "60px", color: "#28a745" }}
                    ></i>
                    <h5 className="mt-3">REST API</h5>
                  </div>
                  <div className="tech-item">
                    <i
                      className="fas fa-clock"
                      style={{ fontSize: "60px", color: "#ff6b6b" }}
                    ></i>
                    <h5 className="mt-3">Real-time</h5>
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="floating-dot dot-1"></div>
                  <div className="floating-dot dot-2"></div>
                  <div className="floating-dot dot-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="modern-cta">
        <div className="cta-background-animation">
          <div className="animated-circle circle-1"></div>
          <div className="animated-circle circle-2"></div>
          <div className="animated-circle circle-3"></div>
        </div>
        <div className="container cta-content">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="cta-tag">Ready to Transform?</div>
              <h2 className="cta-heading mb-4">
                Let's Build the Future of Location Intelligence Together
              </h2>
              <p className="cta-text mb-4">
                Join hundreds of businesses that trust Geosentry to power their
                location-based services. Experience the difference that true
                innovation makes.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="cta-button primary me-3">
                  <span>Start Your Journey</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a
                  href="/service/fleet-management"
                  className="cta-button secondary"
                >
                  <span>Explore Solutions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
