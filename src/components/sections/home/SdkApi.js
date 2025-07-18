import React from "react";

const SdkApi = () => {
  return (
    <section className="modern-sdk-section py-4">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <h2 className=" section-title mb-3 h2 fw-bold text-dark">
            Our SDK & APIs
          </h2>
          <p className="section-description">
            Powerful tools to integrate location intelligence into your
            applications
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="modern-api-card">
              <div className="api-icon">
                <div className="icon-circle">
                  <img src="/img/content/SDK.svg" alt="SDK" />
                </div>
              </div>
              <div className="api-content">
                <h3>SDK</h3>
                <p>
                  Empower your development journey and start building the future
                  today
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="modern-api-card">
              <div className="api-icon">
                <div className="icon-circle">
                  <img src="/img/content/Geocoding.svg" alt="Geocoding APIs" />
                </div>
              </div>
              <div className="api-content">
                <h3>GeoCoding APIs</h3>
                <p>
                  Discover forward geocoding, reverse geocoding, and IP
                  geocoding APIs
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="modern-api-card">
              <div className="api-icon">
                <div className="icon-circle">
                  <img
                    src="/img/content/Geofencing (1).svg"
                    alt="Geofence APIs"
                  />
                </div>
              </div>
              <div className="api-content">
                <h3>Geofence APIs</h3>
                <p>
                  Explore our geofencing API for boundary setting and
                  location-based controls
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="modern-api-card">
              <div className="api-icon">
                <div className="icon-circle">
                  <img src="/img/content/routing_api.svg" alt="Routing APIs" />
                </div>
              </div>
              <div className="api-content">
                <h3>Routing APIs</h3>
                <p>
                  Discover APIs for distance calculation, matrix operations,
                  route optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdkApi;
