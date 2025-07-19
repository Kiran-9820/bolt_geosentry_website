import React, { useEffect } from "react";
import PulseGlobe from "../common/PulseGlobe";

const NewsPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Advanced Fleet Management, Geofencing, and Geo Tracking";
    window.scrollTo(0, 0);
  }, []);

  // Initialize news page functionality
  useEffect(() => {
    // Filter functionality
    const filterButtons = document.querySelectorAll(".news-filter-btn");
    const newsItems = document.querySelectorAll(".news-item");

    if (filterButtons.length && newsItems.length) {
      filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"));

          // Add active class to clicked button
          this.classList.add("active");

          const filter = this.getAttribute("data-filter");

          // Show/hide news items based on filter
          newsItems.forEach((item) => {
            if (filter === "all" || item.classList.contains(filter)) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        });
      });
    }
  }, []);

  return (
    <main className="modern-main">
      {/* HERO SECTION WITH UNIQUE DESIGN */}
      <section className="news-hero">
        <div className="container">
          <div className="row align-items-center mt-6">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <span className="hero-badge">Breaking News</span>
                <h1 className="hero-title-large">
                  Latest Updates from
                  <span className="text-gradient"> Geosentry</span>
                </h1>
                <p className="hero-subtitle">
                  Stay informed about our latest milestones, partnerships,
                  product launches, and industry achievements as we
                  revolutionize location intelligence.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">2025</h3>
                    <p className="stat-label">Latest Investment</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">AI-First</h3>
                    <p className="stat-label">Innovation</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">Global</h3>
                    <p className="stat-label">Expansion</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h4>Growth</h4>
                  <p>Rapid expansion</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h4>Partnerships</h4>
                  <p>Strategic alliances</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <h4>Achievements</h4>
                  <p>Industry recognition</p>
                </div>
                <PulseGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNED NEWS SECTION */}
      <section className="news-section position-relative py-5">
        <div className="section-bg-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
        </div>
        <div className="container position-relative z-index-9">
          <div className="section-heading text-center mb-5">
            <span className="badge rounded-pill bg-primary-soft px-3 py-2 mb-3">
              <i className="fas fa-newspaper me-2"></i>Latest Updates
            </span>
            <h2 className="display-5 fw-bold">News & Announcements</h2>
            <div className="heading-line mx-auto"></div>
          </div>

          <div className="news-spotlight">
            <div
              className="news-card glass-card wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row g-0">
                <div className="col-lg-5">
                  <div className="news-date-badge d-flex align-items-center justify-content-between p-4">
                    <div className="date-badge-content">
                      <div className="date-badge">
                        <span className="month">May</span>
                        <span className="day">10</span>
                        <span className="year">2025</span>
                      </div>
                      <div className="news-category mt-4">
                        <span className="category-tag">
                          <i className="fas fa-tag me-2"></i>Investment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="news-content p-4 p-lg-5">
                    <div className="news-header">
                      <h2 className="news-title">
                        Geosentry.ai Secures Strategic Investment from Advayax
                        Ventures
                      </h2>
                      <p className="news-location">
                        <i className="fas fa-map-marker-alt me-2"></i>
                        Bangalore, India – May 10, 2025
                      </p>
                    </div>
                    <div className="news-body">
                      <p>
                        We're excited to announce that Advayax Ventures, a
                        Bangalore-based venture capital firm, has formally
                        invested in Geosentry.ai, a next-generation startup
                        pioneering the development of powerful geospatial
                        intelligence platforms.
                      </p>
                      <p>
                        This strategic partnership reflects Advayax's strong
                        confidence in Geosentry's mission to revolutionize
                        spatial data analytics through cutting-edge AI and
                        machine learning. The collaboration is focused on
                        enabling advanced applications across urban planning,
                        defense, logistics, and smart infrastructure, both in
                        India and on the global stage.
                      </p>
                      <p>
                        Geosentry.ai is proud to be a part of Advayax Ventures'
                        high-impact portfolio. Both teams are deeply aligned in
                        their vision to build robust, AI-driven solutions that
                        redefine how spatial data is interpreted and applied in
                        the real world.
                      </p>
                    </div>
                    <div className="news-footer mt-4 pt-3 border-top border-light">
                      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <p className="news-footer-text mb-3 mb-md-0">
                          <i className="fas fa-link me-2"></i>Stay updated:
                        </p>
                        <div className="news-links">
                          <a
                            href="https://geosentry.ai"
                            className="btn btn-primary btn-sm me-2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fas fa-globe me-2"></i>Geosentry.ai
                          </a>
                          <a
                            href="https://advayax.com"
                            className="btn btn-outline-primary btn-sm"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fas fa-external-link-alt me-2"></i>
                            Advayax.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="row g-4">
            {/* News Item 1 */}
            <div className="col-md-6 col-lg-4 news-item press-release">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img
                      src="/img/content/map.png"
                      alt="News"
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="news-category position-absolute top-0 start-0 bg-primary text-white py-1 px-3 m-3">
                      Press Release
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 25, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">
                      Geosentry Launches New API for Enhanced Location
                      Intelligence
                    </h3>
                    <p className="news-excerpt text-muted mb-3">
                      Geosentry announces the release of its new Location
                      Intelligence API, designed to provide businesses with
                      advanced spatial analytics capabilities.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-sm btn-outline-primary rounded-pill"
                    >
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="col-md-6 col-lg-4 news-item company-news">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img
                      src="/img/content/fleet-management-3.png"
                      alt="News"
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="news-category position-absolute top-0 start-0 bg-success text-white py-1 px-3 m-3">
                      Company News
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 20, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">
                      Geosentry Expands Operations to Southeast Asia
                    </h3>
                    <p className="news-excerpt text-muted mb-3">
                      Geosentry announces expansion into Southeast Asian markets
                      with new offices in Singapore and partnerships with local
                      logistics companies.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-sm btn-outline-primary rounded-pill"
                    >
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="col-md-6 col-lg-4 news-item press-release">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img
                      src="/img/content/gps-tracking.png"
                      alt="News"
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="news-category position-absolute top-0 start-0 bg-primary text-white py-1 px-3 m-3">
                      Press Release
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 15, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">
                      Geosentry Partners with Leading Logistics Provider
                    </h3>
                    <p className="news-excerpt text-muted mb-3">
                      Geosentry announces strategic partnership with FastTrack
                      Logistics to enhance fleet management capabilities across
                      India.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-sm btn-outline-primary rounded-pill"
                    >
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="col-md-6 col-lg-4 news-item company-news">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img
                      src="/img/content/api-and-sdk.png"
                      alt="News"
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="news-category position-absolute top-0 start-0 bg-success text-white py-1 px-3 m-3">
                      Company News
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 10, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">
                      Geosentry Achieves ISO 27001 Certification
                    </h3>
                    <p className="news-excerpt text-muted mb-3">
                      Geosentry is proud to announce that it has achieved ISO
                      27001 certification, demonstrating our commitment to
                      information security.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-sm btn-outline-primary rounded-pill"
                    >
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* News Item 5 */}
            <div className="col-md-6 col-lg-4 news-item investment">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img
                      src="/img/bg/cloud-bg.jpg"
                      alt="News"
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="news-category position-absolute top-0 start-0 bg-warning text-dark py-1 px-3 m-3">
                      Investment
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 5, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">
                      Geosentry Completes Series A Funding Round
                    </h3>
                    <p className="news-excerpt text-muted mb-3">
                      Geosentry announces the successful completion of its
                      Series A funding round, raising $10 million to accelerate
                      growth and product development.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-sm btn-outline-primary rounded-pill"
                    >
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* News Item 6 */}
            <div className="col-md-6 col-lg-4 news-item press-release">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img
                      src="/img/content/customizable-Geofencing.png"
                      alt="News"
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="news-category position-absolute top-0 start-0 bg-primary text-white py-1 px-3 m-3">
                      Press Release
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 1, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">
                      Geosentry Introduces Advanced Geofencing Solution
                    </h3>
                    <p className="news-excerpt text-muted mb-3">
                      Geosentry launches its next-generation geofencing solution
                      with enhanced customization options and real-time alerts.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-sm btn-outline-primary rounded-pill"
                    >
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-5">
            <button className="btn btn-primary rounded-pill px-5 py-2">
              Load More News <i className="fas fa-sync-alt ms-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="h3 text-white mb-3">
                Subscribe to Our Newsletter
              </h2>
              <p className="mb-0">
                Stay updated with the latest news, product updates, and industry
                insights from Geosentry.
              </p>
            </div>
            <div className="col-lg-6">
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-pill-start"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="btn btn-light rounded-pill-end px-4"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Call to Action */}
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
                <span className="cta-tag">Connect With Us</span>
                <h2 className="cta-heading">Stay Updated with Geosentry</h2>
                <p className="cta-text">
                  As a proudly funded startup, Geosentry continues to build on
                  top of Google's powerful ecosystem. If you're solving hard
                  problems in the real world, there's no better partner than
                  Google Cloud to bring your vision to life.
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

export default NewsPage;
