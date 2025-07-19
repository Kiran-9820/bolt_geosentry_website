import React from "react";

const Technology = () => {
  return (
    <section className="modern-tech-section pt-0">
      <div className="container">
        <div className="text-center section-heading mb-5">
          <h2 className="section-title mb-3 h2 fw-bold text-dark">
            Advanced <span className="text-gradient ">Technology</span> For Your
            Success
          </h2>
          <p className="section-description">
            Geosentry leverages cutting-edge technology to provide you with
            powerful location-based services. Our platform is designed to
            enhance your operations, improve safety, and deliver actionable
            insights.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <div className="modern-card h-100 position-relative">
              <div className="card-accent-border"></div>
              <div className="card-body p-4 p-lg-5">
                <div className="card-icon mb-4">
                  <img
                    src="/img/content/NewAI.svg"
                    className="tech-icon"
                    alt="AI Technology"
                  />
                </div>
                <h3 className="tech-card-title mb-3">
                  Geosentry AI-Powered Insights
                </h3>
                <p className="tech-card-text">
                  Our AI algorithms examine location data, delivering meaningful
                  insights. Access predictive analytics for efficiency and
                  behavior analysis, understanding user patterns, and receiving
                  real-time safety alerts.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="modern-card h-100 position-relative">
              <div className="card-accent-border"></div>
              <div className="card-body p-4 p-lg-5">
                <div className="card-icon mb-4">
                  <img
                    src="/img/content/Cloud (2).svg"
                    className="tech-icon"
                    alt="Cloud Platform"
                  />
                </div>
                <h3 className="tech-card-title mb-3">
                  Built On Cloud Platform
                </h3>
                <p className="tech-card-text">
                  Unlock seamless performance, limitless scalability, and
                  top-tier data security with Google Cloud Platform. Elevate
                  your location data storage and processing to the highest
                  standards of security using GCP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
