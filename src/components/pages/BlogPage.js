import React, { useEffect } from "react";
import geocodingImage from "../../assets/img/banner/1.png";
import gpsImage from "../../assets/img/banner/2.png";
import PulseGlobe from "../common/PulseGlobe";

const BlogPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Advanced Fleet Management, Geofencing, and Geo Tracking";
    window.scrollTo(0, 0);
  }, []);

  // Initialize carousel and other UI elements
  useEffect(() => {
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery(".featured-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        dots: true,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
      });

      window.jQuery(".blog-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 800,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
        },
      });
    }

    // Initialize search functionality
    const searchInput = document.getElementById("blog-search-input");
    if (searchInput) {
      searchInput.addEventListener("keyup", function () {
        const searchTerm = this.value.toLowerCase();
        const blogCards = document.querySelectorAll(".blog-card");

        blogCards.forEach((card) => {
          const title = card
            .querySelector(".blog-title")
            .textContent.toLowerCase();
          const content = card
            .querySelector(".blog-excerpt")
            .textContent.toLowerCase();

          if (title.includes(searchTerm) || content.includes(searchTerm)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    }
  }, []);

  return (
    <main className="modern-main">
      {/* HERO SECTION WITH UNIQUE DESIGN */}
      <section className="blog-hero pb-0">
        <div className="container">
          <div className="row align-items-center mt-4">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <span className="hero-badge">Geosentry Blog</span>
                <h1 className="hero-title-large">
                  Insights & Innovation in
                  <span className="text-gradient"> Location Technology</span>
                </h1>
                <p className="hero-subtitle">
                  Discover the latest trends, technical deep-dives, and success
                  stories from the world of geospatial intelligence and
                  location-based services.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">50+</h3>
                    <p className="stat-label">Technical Articles</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">10K+</h3>
                    <p className="stat-label">Monthly Readers</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">Weekly</h3>
                    <p className="stat-label">New Content</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <h4>Tech Insights</h4>
                  <p>Latest industry trends</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <h4>API Tutorials</h4>
                  <p>Implementation guides</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h4>Case Studies</h4>
                  <p>Real-world success</p>
                </div>
                <PulseGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION WITH COMPLETELY REDESIGNED LAYOUT */}
      <section className="blog-section pt-0 position-relative">
        <div className="container position-relative z-index-9">
          <div className="section-heading text-center mb-5">
            <span className="badge rounded-pill bg-primary-soft px-3 py-2 mb-3">
              <i className="fas fa-blog me-2"></i> Latest Blogs
            </span>
            <h2 className="display-5 fw-bold">Blogs</h2>
            <div className="heading-line mx-auto"></div>
            <p
              className="mx-auto mb-0 text-secondary"
              style={{ maxWidth: "800px" }}
            >
              Explore our latest articles on geospatial intelligence, AI
              applications, and location-based services. From technical
              tutorials to industry insights, we cover it all to help you stay
              informed and inspired.
            </p>
          </div>
          <div className="row g-4">
            {/* Blog Post 1 - Google Maps Integration - Updated to match Google Cloud blog style */}
            <div className="col-lg-12">
              <div
                className="blog-card-modern position-relative overflow-hidden"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "none",
                }}
              >
                <div className="blog-header position-relative">
                  <div
                    className="blog-img"
                    style={{
                      background: `url(${gpsImage}) no-repeat center center`,
                      backgroundSize: "cover",
                      height: "300px",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                  >
                    <div
                      className="overlay position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
                      }}
                    ></div>
                    <div className="blog-title-container position-absolute bottom-0 start-0 w-100 p-5 text-white">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-4">
                          <span className="bg-primary text-white py-2 px-4 rounded-pill fw-bold">
                            Technology
                          </span>
                        </div>
                      </div>
                      <h2 className="blog-title display-6 fw-bold text-white mb-0">
                        Mapping the Future: How Geosentry Leverages Google Maps
                        for Real-Time Location Intelligence
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="blog-content p-5">
                  <div className="blog-intro mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div
                        className="icon-wrapper d-flex align-items-center justify-content-center me-4"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "rgba(52, 152, 219, 0.1)",
                          border: "2px dashed #3498db",
                        }}
                      >
                        <i className="fas fa-map-marked-alt fa-2x text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold">
                          Google Maps Integration
                        </h5>
                        <p className="mb-0 text-muted">
                          Powering location intelligence
                        </p>
                      </div>
                    </div>
                    <p className="mb-4">
                      At Geosentry, we're reimagining how location data is used
                      in logistics, infrastructure, and smart city planning.
                      Behind the scenes of our powerful geospatial intelligence
                      platform lies a deep integration with Google Maps Platform
                      — helping us build immersive, real-time, and scalable
                      mapping experiences.
                    </p>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-map fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">Google Maps SDK</h5>
                            <p className="mb-0">
                              We use the Google Maps JavaScript and Android SDKs
                              to visualize the movement of vehicles, field
                              teams, and assets with precise positioning and
                              intuitive UI overlays.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-location-arrow fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">Geocoding APIs</h5>
                            <p className="mb-0">
                              Address normalization and route labeling are
                              powered by Google's Geocoding API, converting raw
                              coordinates into usable street-level data in
                              milliseconds.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-route fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">Directions API</h5>
                            <p className="mb-0">
                              One of the core features of our platform is
                              multi-vehicle routing and ETA prediction, all made
                              possible by the Google Directions API.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-map-pin fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">Places API</h5>
                            <p className="mb-0">
                              By integrating the Google Places API, we enrich
                              location data with nearby landmarks, categories,
                              and user-friendly names.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 2 - Google Cloud Integration */}
            <div className="col-lg-12">
              <div
                className="blog-card-modern position-relative overflow-hidden"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "none",
                  marginTop: "40px",
                }}
              >
                <div className="blog-header position-relative">
                  <div
                    className="blog-img"
                    style={{
                      background: `url(${geocodingImage}) no-repeat center center`,
                      backgroundSize: "cover",
                      height: "300px",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                  >
                    <div className="blog-title-container position-absolute bottom-0 start-0 w-100 p-5 text-white">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-4">
                          <span className="bg-primary text-white py-2 px-4 rounded-pill fw-bold">
                            Cloud Technology
                          </span>
                        </div>
                      </div>
                      <h2 className="blog-title display-6 fw-bold text-white mb-0">
                        Scaling Geosentry with Google Cloud: A Cloud-Native
                        Approach to Geospatial Intelligence
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="blog-content p-5">
                  <div className="blog-intro mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div
                        className="icon-wrapper d-flex align-items-center justify-content-center me-4"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "rgba(52, 152, 219, 0.1)",
                          border: "2px dashed #3498db",
                        }}
                      >
                        <i className="fas fa-cloud fa-2x text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold">
                          Google Cloud Integration
                        </h5>
                        <p className="mb-0 text-muted">
                          Powering our geospatial platform
                        </p>
                      </div>
                    </div>
                    <p className="mb-4">
                      As a startup focused on solving real-world challenges
                      using geospatial data, we at Geosentry needed a cloud
                      infrastructure that could scale with our vision. Google
                      Cloud has been our platform of choice from day one —
                      enabling us to innovate faster, stay secure, and deliver
                      real-time intelligence to our customers.
                    </p>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-database fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">Firestore</h5>
                            <p className="mb-0">
                              Every vehicle breadcrumb, status update, and event
                              log is stored in Google Firestore
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-code fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">Cloud Functions</h5>
                            <p className="mb-0">
                              We automate alerts using Google Cloud Functions
                              for serverless workflows
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-chart-bar fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">BigQuery</h5>
                            <p className="mb-0">
                              Generate heatmaps, trip summaries, and usage
                              patterns using Google BigQuery
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-exchange-alt fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">Cloud Pub/Sub</h5>
                            <p className="mb-0">
                              We stream GPS data from thousands of devices via
                              MQTT to Cloud Pub/Sub
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div
                        className="service-card p-4 h-100"
                        style={{
                          borderRadius: "16px",
                          background: "rgba(52, 152, 219, 0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="d-flex">
                          <div className=" me-4">
                            <div
                              className="icon-bg d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: "rgba(52, 152, 219, 0.1)",
                              }}
                            >
                              <i className="fas fa-shield-alt fa-lg text-primary"></i>
                            </div>
                          </div>
                          <div className="service-content">
                            <h5 className="fw-bold mb-2">
                              Cloud Monitoring & IAM
                            </h5>
                            <p className="mb-0">
                              Ensure uptime, monitor usage spikes, and enforce
                              strict access policies
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-1 position-absolute bottom-0 start-0"
          style={{ opacity: "0.1" }}
        >
          <img src="/src/assets/img/shapes/01.png" alt="shape" />
        </div>
        <div
          className="shape-2 position-absolute top-50 end-0"
          style={{ opacity: "0.1" }}
        >
          <img src="/src/assets/img/shapes/02.png" alt="shape" />
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
                <h2 className="cta-heading">Powered by Google Cloud</h2>
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

export default BlogPage;
