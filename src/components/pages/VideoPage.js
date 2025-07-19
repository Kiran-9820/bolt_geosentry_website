import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PulseGlobe from "../common/PulseGlobe";

const VideoPage = () => {
  useEffect(() => {
    document.title = "Media | Geosentry";
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
                <span className="hero-badge">Media Gallery</span>
                <h1 className="hero-title-large">
                  Our Videos:
                  <span className="text-gradient">
                    {" "}
                    Showcasing Our Expertise
                  </span>
                </h1>
                <p className="hero-subtitle">
                  Explore our collection of videos demonstrating Geosentry's
                  powerful location intelligence capabilities and real-world
                  applications in action.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-play-circle"></i>
                  </div>
                  <h4>Product Demos</h4>
                  <p>See features in action</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-video"></i>
                  </div>
                  <h4>Tutorials</h4>
                  <p>Learn how to use our tools</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h4>Case Studies</h4>
                  <p>Real-world applications</p>
                </div>
                <PulseGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="pt-0">
        <Container>
          <div className="section-heading text-center mb-5">
            <span className="badge rounded-pill bg-primary-soft px-3 py-2 mb-3">
              <i className="fas fa-film me-2"></i>Featured Videos
            </span>
            <h2 className="display-5 fw-bold">Watch and Learn</h2>
            <div className="heading-line mx-auto"></div>
          </div>
          <Row className="justify-content-center g-4">
            <Col lg={10} className="mb-5">
              <div className="modern-card h-100">
                <div className="card-body">
                  <div className="mb-4">
                    <h3 className="card-title h4">
                      Revolutionizing Location Data Analysis with AI-Powered
                      Insights
                    </h3>
                    <p className="text-muted">
                      See how Geosentry transforms raw location data into
                      actionable business intelligence
                    </p>
                  </div>
                  <div className="video-container position-relative rounded-10 overflow-hidden">
                    <iframe
                      className="w-100 height-400 border-radius-5"
                      src="https://www.youtube.com/embed/b501aszrEoI?rel=0"
                      title="Revolutionizing Location Data Analysis"
                      allow="encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={10}>
              <div className="modern-card h-100">
                <div className="card-body">
                  <div className="mb-4">
                    <h3 className="card-title h4">
                      Geosentry Application for User and Vehicle Tracking
                    </h3>
                    <p className="text-muted">
                      Learn how our platform enables real-time tracking and
                      monitoring
                    </p>
                  </div>
                  <div className="video-container position-relative rounded-10 overflow-hidden">
                    <div
                      className="story-video bg-img cover-background border-radius-5"
                      style={{
                        backgroundImage: 'url("/img/bg/account-cover.jpg")',
                        height: "400px",
                      }}
                      data-overlay-dark="3"
                    >
                      <div className="opacity-extra-medium bg-black"></div>
                      <div className="inner-border"></div>
                      <div className="text-center position-absolute top-50 start-50 translate-middle z-index-1">
                        <a
                          href="/img/videos/GEO.mp4"
                          className="icon-play video popup-youtube"
                          aria-label="Play Geosentry Application Video"
                        >
                          <span className="visually-hidden">Play video</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
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
                <span className="cta-tag">Ready to See More?</span>
                <h2 className="cta-heading">Experience Geosentry in Action</h2>
                <p className="cta-text">
                  Contact our team for a personalized demo of our location
                  intelligence solutions tailored to your specific business
                  needs.
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <a href="/contact" className="cta-button primary">
                  <span>Request a Demo</span>
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

export default VideoPage;
