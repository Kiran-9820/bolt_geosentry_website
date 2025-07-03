import React, { useEffect } from "react";

const NewsPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Advanced Fleet Management, Geofencing, and Geo Tracking";
    window.scrollTo(0, 0);
  }, []);

  // Initialize owl carousel when component mounts
  useEffect(() => {
    // Check if jQuery and owl carousel are available
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        smartSpeed: 800,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
          },
        },
      });
    } else {
      console.warn("jQuery or owl carousel plugin not available");
    }
  }, []);

  return (
    <main>
      {/* PAGE TITLE */}
      <section className="p-0 bg-primary-solid">
        {/* banner container */}
        <div className="container d-table">
          <div className="d-table-cell align-middle py-6 py-lg-6">
            <div className="row align-items-center z-index-9 position-relative">
              {/* left banner text */}
              <div className="col-lg-14 mb-4 mb-lg-0">
                <div className="header-text text-center">
                  <h1
                    className="display-lg-16 display-xxl-10 text-white w-md-80 w-lg-100 mx-auto mb-1-9 wow fadeIn"
                    data-wow-delay=".1s"
                  >
                    Latest News and Updates from Geosentry.
                  </h1>
                </div>
              </div>
              {/* end banner text */}
            </div>
          </div>
        </div>
      </section>

      <section className="position-relative">
        <div className="container position-relative z-index-9">
          <div
            className="section-heading5 text-center wow fadeInUp mb-5"
            data-wow-delay=".1s"
          >
            <h2 className="mb-0 h1 z-index-9 position-relative">News</h2>
            <span className="title-shape"></span>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="card newsletter-card h-100 wow">
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-4">
                      <div
                        className=" h-100 d-flex flex-column justify-content-center p-1-9 p-sm-2-3 p-md-6 text-center"
                        style={{
                          background:
                            "linear-gradient(to right, #444599, #33bab3)",
                        }}
                      >
                        <div className="mb-3">
                          <span className="display-14 text-white d-block mb-2-5">
                            <i className="fas fa-newspaper"></i>
                          </span>
                          <h3 className="h4 text-white mb-0">
                            Investment Announcement
                          </h3>
                        </div>
                        <div className="newsletter-date bg-white text-center py-2 px-3 d-inline-block mx-auto rounded">
                          <span className="d-block text-primary">May 10</span>
                          <span className="d-block text-primary font-weight-600">
                            2025
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="p-1-9 p-sm-2-3 p-md-6 p-lg-7 h-100 bg-white position-relative pt-4 pb-4">
                        <div className="mb-4">
                          <h2 className="h1 mb-3 text-primary">
                            Geosentry.ai Secures Strategic Investment from
                            Advayax Ventures
                          </h2>
                          <p className="mb-4 font-weight-500 text-muted">
                            Bangalore, India – May 10, 2025
                          </p>
                        </div>
                        <p className="mb-4">
                          We're excited to announce that Advayax Ventures, a
                          Bangalore-based venture capital firm, has formally
                          invested in Geosentry.ai, a next-generation startup
                          pioneering the development of powerful geospatial
                          intelligence platforms.
                        </p>
                        <p className="mb-4">
                          This strategic partnership reflects Advayax's strong
                          confidence in Geosentry's mission to revolutionize
                          spatial data analytics through cutting-edge AI and
                          machine learning. The collaboration is focused on
                          enabling advanced applications across urban planning,
                          defense, logistics, and smart infrastructure, both in
                          India and on the global stage.
                        </p>
                        <p className="mb-4">
                          Geosentry.ai is proud to be a part of Advayax
                          Ventures' high-impact portfolio. Both teams are deeply
                          aligned in their vision to build robust, AI-driven
                          solutions that redefine how spatial data is
                          interpreted and applied in the real world.
                        </p>
                        <div className="text-center pt-2 border-top border-light">
                          <p className="mb-3 font-weight-600">Stay updated:</p>
                          <div className="d-flex justify-content-center">
                            <a
                              href="https://geosentry.ai"
                              className="butn style-one me-3"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>Geosentry.ai</span>
                            </a>
                            <a
                              href="https://advayax.com"
                              className="butn style-one"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>Advayax.com</span>
                            </a>
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
      </section>

      <section
        className="footer-bottom-bg parallax fadeInUp primary-overlay-90 cover-background md"
        data-overlay-dark="9"
      >
        <div className="container">
          <div className="row position-relative z-index-1 align-items-center">
            <div className="col-lg-9 text-center text-lg-start mb-3 mb-lg-0">
              <h6 className="text-white">
                As a proudly funded startup, Geosentry continues to build on top
                of Google’s powerful ecosystem. If you're solving hard problems
                in the real world, there’s no better partner than Google Cloud
                to bring your vision to life.
              </h6>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <a href="mailto:support@geosentry.ai" className="butn style-two">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
