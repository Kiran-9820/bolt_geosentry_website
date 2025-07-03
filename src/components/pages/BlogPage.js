import React, { useEffect } from "react";

const BlogPage = () => {
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
        smartSpeed: 800,
        dots: true,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
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
                    Latest Blogs and Updates from Geosentry.
                  </h1>
                </div>
              </div>
              {/* end banner text */}
            </div>
          </div>
        </div>
      </section>

      {/* Investment News Section */}
      <section className="py-6 pb-2 position-relative">
        <div className="container position-relative z-index-9">
          <div
            className="section-heading5 text-center wow fadeInUp mb-5"
            data-wow-delay=".1s"
          >
            <h2 className="mb-0 h1 z-index-9 position-relative">Blogs</h2>
            <span className="title-shape"></span>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 position-relative">
              {/* Custom navigation arrows */}
              <div className="custom-owl-nav position-absolute w-100 h-100">
                <button
                  className="custom-owl-prev position-absolute top-50 start-0 translate-middle-y z-index-9 bg-primary text-white border-0 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "44px", height: "44px", marginLeft: "-22px" }}
                  onClick={() =>
                    window.jQuery(".owl-carousel").trigger("prev.owl.carousel")
                  }
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  className="custom-owl-next position-absolute top-50 end-0 translate-middle-y z-index-9 bg-primary text-white border-0 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "44px",
                    height: "44px",
                    marginRight: "0px",
                  }}
                  onClick={() =>
                    window.jQuery(".owl-carousel").trigger("next.owl.carousel")
                  }
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div className="owl-carousel owl-theme">
                {/* Google Maps Platform Integration Blog - Modern card design with horizontal split */}
                <div className="item">
                  <div className="card h-100 wow rounded-lg overflow-hidden border-0">
                    <div className="card-body p-0">
                      <div className="row g-0">
                        <div className="col-lg-3">
                          <div
                            className="h-100 position-relative"
                            style={{
                              background:
                                "linear-gradient(to right, #444599, #33bab3)",
                              minHeight: "300px",
                            }}
                          >
                            <div className="p-4 text-white h-100 d-flex flex-column justify-content-center">
                              <div className="mb-4 text-center">
                                <i className="fas fa-map-marked-alt fa-4x mb-3"></i>
                                <h3 className="h3 text-white mb-3 font-weight-700">
                                  Google Maps Integration
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="p-4  h-100">
                            <div className="mb-4">
                              <h2 className="h1 mb-3 text-primary">
                                Mapping the Future: How Geosentry Leverages
                                Google Maps for Real-Time Location Intelligence
                              </h2>
                            </div>
                            <p className="mb-4">
                              At Geosentry, we're reimagining how location data
                              is used in logistics, infrastructure, and smart
                              city planning. Behind the scenes of our powerful
                              geospatial intelligence platform lies a deep
                              integration with Google Maps Platform — helping us
                              build immersive, real-time, and scalable mapping
                              experiences.
                            </p>
                            <h5 className="mb-3 text-primary">
                              Key Areas of Integration:
                            </h5>
                            <div className="mb-4">
                              <div className="d-flex align-items-center mb-3">
                                <div
                                  className="me-3 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    minWidth: "48px",
                                  }}
                                >
                                  <i className="fas fa-map fa-lg"></i>
                                </div>
                                <div>
                                  <h6 className="mb-1">
                                    Google Maps SDK for Real-Time Visualization
                                  </h6>
                                  <p className="mb-0 small">
                                    We use the Google Maps JavaScript and
                                    Android SDKs to visualize the movement of
                                    vehicles, field teams, and assets with
                                    precise positioning and intuitive UI
                                    overlays.
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-3">
                                <div
                                  className="me-3 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    minWidth: "48px",
                                  }}
                                >
                                  <i className="fas fa-location-arrow fa-lg"></i>
                                </div>
                                <div>
                                  <h6 className="mb-1">
                                    Geocoding and Reverse Geocoding APIs
                                  </h6>
                                  <p className="mb-0 small">
                                    Address normalization and route labeling are
                                    powered by Google's Geocoding API,
                                    converting raw coordinates into usable
                                    street-level data in milliseconds.
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-3">
                                <div
                                  className="me-3 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    minWidth: "48px",
                                  }}
                                >
                                  <i className="fas fa-route fa-lg"></i>
                                </div>
                                <div>
                                  <h6 className="mb-1">
                                    Directions API for Route Optimization
                                  </h6>
                                  <p className="mb-0 small">
                                    One of the core features of our platform is
                                    multi-vehicle routing and ETA prediction,
                                    all made possible by the Google Directions
                                    API.
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <div
                                  className="me-3 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    minWidth: "48px",
                                  }}
                                >
                                  <i className="fas fa-map-pin fa-lg"></i>
                                </div>
                                <div>
                                  <h6 className="mb-1">
                                    Places API for Smart Location Tagging
                                  </h6>
                                  <p className="mb-0 small">
                                    By integrating the Google Places API, we
                                    enrich location data with nearby landmarks,
                                    categories, and user-friendly names.
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

                {/* Google Cloud Integration Blog - Card with top image design */}
                <div className="item">
                  <div
                    className="card h-100 wow fadeInUp rounded-lg overflow-hidden"
                    style={{ border: "1px solid #e9ecef" }}
                  >
                    <div
                      className="card-img-top position-relative"
                      style={{
                        height: "200px",
                        background:
                          "url('img/bg/cloud-bg.jpg') no-repeat center center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background:
                            "linear-gradient(to right, #444599, #33bab3)",
                        }}
                      ></div>
                      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                        <i className="fas fa-cloud fa-4x mb-3"></i>
                        <h3 className="h3 text-white font-weight-700">
                          Google Cloud Integration
                        </h3>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h2 className="h1 mb-3 text-primary">
                        Scaling Geosentry with Google Cloud: A Cloud-Native
                        Approach to Geospatial Intelligence
                      </h2>
                      <p className="mb-4">
                        As a startup focused on solving real-world challenges
                        using geospatial data, we at Geosentry needed a cloud
                        infrastructure that could scale with our vision. Google
                        Cloud has been our platform of choice from day one —
                        enabling us to innovate faster, stay secure, and deliver
                        real-time intelligence to our customers.
                      </p>
                      <div className="row mb-4">
                        <div className="col-md-4 mb-3 mb-md-0">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body text-center p-3">
                              <div
                                className="rounded-circle bg-primary mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px" }}
                              >
                                <i className="fas fa-database text-white fa-2x"></i>
                              </div>
                              <h5 className="h6 mb-2">Firestore</h5>
                              <p className="small mb-0">
                                Every vehicle breadcrumb, status update, and
                                event log is stored in Google Firestore
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body text-center p-3">
                              <div
                                className="rounded-circle bg-primary mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px" }}
                              >
                                <i className="fas fa-code text-white fa-2x"></i>
                              </div>
                              <h5 className="h6 mb-2">Cloud Functions</h5>
                              <p className="small mb-0">
                                We automate alerts using Google Cloud Functions
                                for serverless workflows
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body text-center p-3">
                              <div
                                className="rounded-circle bg-primary mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px" }}
                              >
                                <i className="fas fa-chart-bar text-white fa-2x"></i>
                              </div>
                              <h5 className="h6 mb-2">BigQuery</h5>
                              <p className="small mb-0">
                                Generate heatmaps, trip summaries, and usage
                                patterns using Google BigQuery
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body text-center p-3">
                              <div
                                className="rounded-circle bg-primary mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px" }}
                              >
                                <i className="fas fa-exchange-alt text-white fa-2x"></i>
                              </div>
                              <h5 className="h6 mb-2">Cloud Pub/Sub</h5>
                              <p className="small mb-0">
                                We stream GPS data from thousands of devices via
                                MQTT to Cloud Pub/Sub
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body text-center p-3">
                              <div
                                className="rounded-circle bg-primary mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{ width: "60px", height: "60px" }}
                              >
                                <i className="fas fa-shield-alt text-white fa-2x"></i>
                              </div>
                              <h5 className="h6 mb-2">
                                Cloud Monitoring & IAM
                              </h5>
                              <p className="small mb-0">
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
        </div>

        <div className="d-inline-block p-2 bg-green-dark ani-zoomin position-absolute bottom-20 left-10 rounded-circle"></div>
        <div className="d-inline-block p-2 bg-primary ani-zoomin position-absolute top-40 right-10 rounded-circle"></div>
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

export default BlogPage;
