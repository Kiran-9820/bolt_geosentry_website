import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Advanced Fleet Management, Geofencing, and Geo Tracking";
    window.scrollTo(0, 0);
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
                    A Cutting-Edge GPS Tracking Solution Driven by AI and Built
                    on the Reliable Google Cloud Platform
                  </h1>
                </div>
              </div>
              {/* end banner text */}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="p-0">
        <div className="container position-relative z-index-9">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-0">
              <div className="position-relative text-center mb-0">
                <img
                  src="/img/content/about-us.png"
                  className="position-relative z-index-2 img-aboutus mb-0"
                  alt="About Us"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <div
                  className="section-heading4 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <span>Who We Are</span>
                </div>
                <h2 className="mb-1-9 h1 wow fadeInUp" data-wow-delay=".2s">
                  An AI Powered Geo Service
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  Geosentry, a leader in tech solutions, excels in advanced
                  GeoServices like geofencing and geo-tracking. Our expertise
                  includes seamless integration with the Google Cloud Platform
                  through API, utilizing AI methods to redefine fleet
                  management. This ensures businesses gain a strategic advantage
                  in navigating the dynamic digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="position-relative z-index-9">
        <div className="bg-primary-solid section-bg-aboutus"></div>
        <div className="container position-relative z-index-9">
          <div
            className="section-heading5 white text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            <h2 className="mb-0 h1 z-index-9 position-relative text-white">
              Geosentry: Your Partner in Achieving <br /> Your Business
              Objectives
            </h2>
            <span className="title-shape"></span>
          </div>
          <div className="row justify-content-center mt-8">
            <div className="col-md-9">
              <div className="row g-0 bg-white box-shadow-large">
                <div className="col-lg-4">
                  <div
                    className="bg-light-gray bg-img cover-background p-1-9 p-sm-1-9 h-100"
                    data-background="/img/content/Untitled-2.png"
                    style={{
                      backgroundImage: "url(/img/content/Untitled-2.png)",
                    }}
                  >
                    <h1
                      className="wow fadeInUp mt-5 text-center"
                      data-wow-delay=".2s"
                    >
                      Our <br />
                      Approach
                    </h1>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="bg-white p-1-9 p-sm-1-9 h-90 mt-2">
                    <p>
                      At Geosentry, we believe in a customer-centric approach,
                      where your goals and vision are at the heart of everything
                      we do. We collaborate closely with you to understand your
                      unique requirements, challenges, and objectives. Our team
                      of highly skilled software engineers, designers, and
                      project managers work tirelessly to develop tailored
                      solutions that align perfectly with your business
                      strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="pricing-line1"></span>
        <span className="pricing-line2"></span>
        <img
          src="/img/shapes/flower1.png"
          className="position-absolute pricing-shape opacity2"
          alt="Shape"
        />
        <div className="d-inline-block p-2 bg-green-dark ani-zoomin position-absolute top-20 right-5 rounded-circle"></div>
        <div className="d-inline-block p-2 bg-orange-dark ani-zoomin position-absolute top-50 left-5 rounded-circle"></div>
        <div className="d-inline-block p-2 bg-yellow-dark ani-zoomin position-absolute top-10 left-30 rounded-circle"></div>
      </section>

      {/* Why Geosentry Stands Out Section */}
      <section className="section-aboutus">
        <div className="container pt-0">
          <div className="w-md-85 w-lg-65 w-xl-50 text-center mx-auto mb-6 mb-lg-6">
            <h1 className="mb-0">Why Geosentry Stands Out</h1>
          </div>
          <div className="row mt-n5">
            <div className="col-md-6 col-lg-3 mt-5">
              <div className="card card-style03 h-100">
                <div className="card-body">
                  <span className="mb-2-6 d-block">
                    <img
                      src="/img/content/Experience.png"
                      alt="Experience"
                      className="w-50"
                    />
                  </span>
                  <h3 className="h5 mb-3">Experience and Expertise</h3>
                  <p className="display-30">
                    With years of industry experience, we have honed our
                    software development skills and expertise. Our team stays
                    up-to-date with the latest technologies and trends, ensuring
                    that the solutions we deliver are modern and future-proof.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-5">
              <div className="card card-style03 h-100">
                <div className="card-body">
                  <span className="mb-2-6 d-block">
                    <img
                      src="/img/content/Customer.png"
                      alt="Client-Centric"
                      className="w-50"
                    />
                  </span>
                  <h3 className="h5 mb-3">Client-Centric Approach</h3>
                  <p className="display-30">
                    Your needs and objectives are our top priority. We customize
                    our solutions to align perfectly with your unique
                    requirements and maintain transparent communication
                    throughout the development process, keeping you involved
                    every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-5">
              <div className="card card-style03 h-100">
                <div className="card-body">
                  <span className="mb-2-6 d-block">
                    <img
                      src="/img/content/Delivery.png"
                      alt="Timely Delivery"
                      className="w-50"
                    />
                  </span>
                  <h3 className="h5 mb-3">Timely Delivery</h3>
                  <p className="display-30">
                    Recognizing the significance of time in business, we employ
                    agile development methodologies that enable us to
                    consistently deliver projects on schedule, without
                    compromising quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-5">
              <div className="card card-style03 h-100">
                <div className="card-body">
                  <span className="mb-2-6 d-block">
                    <img
                      src="/img/content/price.png"
                      alt="Competitive Pricing"
                      className="w-50"
                    />
                  </span>
                  <h3 className="h5 mb-3">Competitive Pricing</h3>
                  <p className="display-30">
                    We offer cost-effective solutions without compromising
                    quality. Our pricing is transparent, and we provide detailed
                    project estimates upfront.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="footer-bottom-bg parallax fadeInUp primary-overlay-90 cover-background md"
        data-overlay-dark="9"
      >
        <div className="container">
          <div className="row position-relative z-index-1 align-items-center">
            <div className="col-lg-9 text-center text-lg-start mb-3 mb-lg-0">
              <h5 className="text-white">Get Started with Geosentry Today</h5>
              <h6 className="text-white">
                Whether you're a startup looking to add location-based features
                to your app or an established enterprise seeking to optimize
                your logistics, Geosentry is here to empower you with
                cutting-edge GPS tracking solutions. Take your business to the
                next level with our GPS tracking route API, GSP tracker devices,
                and AI-driven insights.
              </h6>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <a href="/contact" className="butn style-two">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
