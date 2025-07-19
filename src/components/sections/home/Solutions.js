import React from "react";

const Solutions = () => {
  const solutionItems = [
    {
      icon: "/img/icon/Real_time_GPS _tracking (3).svg",
      title: "Real-Time Location Tracking",
      description:
        "Monitor vehicle locations, speed, and movement patterns with pinpoint accuracy in real-time.",
    },
    {
      icon: "/img/icon/Customizable_geofencing (2).svg",
      title: "Customizable Geofencing",
      description:
        "Create virtual boundaries and receive instant alerts when assets enter or exit designated areas.",
    },
    {
      icon: "/img/icon/Detailed_reporting_and_analytics (2).svg",
      title: "Detailed Reporting & Analytics",
      description:
        "Gain actionable insights with comprehensive data visualization and performance metrics.",
    },
    {
      icon: "/img/icon/API_and_SDK_for_easy_integration (2).svg",
      title: "API & SDK Integration",
      description:
        "Seamlessly incorporate our powerful tracking solutions into your existing software ecosystem.",
    },
    {
      icon: "/img/icon/security (2).svg",
      title: "Enhanced Security Features",
      description:
        "Protect your fleet with advanced security protocols and unauthorized movement alerts.",
    },
    {
      icon: "/img/icon/Newfleet.svg",
      title: "Streamlined Fleet Management",
      description:
        "Optimize operations with intelligent routing, maintenance scheduling, and resource allocation.",
    },
  ];

  return (
    <section className="bg-white py-5" id="modern-solutions">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title mb-3 h2 fw-bold text-dark">
            Powerful Solutions for Modern Fleet Management
          </h2>
          <p
            className="mx-auto mb-0 text-secondary"
            style={{ maxWidth: "800px" }}
          >
            Discover how our comprehensive suite of location-based services can
            transform your operations with cutting-edge technology designed for
            today's mobile world.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {solutionItems.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="modern-solution-box p-4 h-100 bg-light shadow-sm rounded-4 position-relative overflow-hidden">
                <div
                  className="solution-icon-wrapper mb-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #444599 0%, #33bab3 100%)",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="solution-icon"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </div>
                <h3 className="h5 fw-bold mb-3">{item.title}</h3>
                <p className="mb-2 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src="/img/shapes/03.png"
        className="position-absolute left bottom-0 opacity1"
        alt="..."
      />
    </section>
  );
};

export default Solutions;
