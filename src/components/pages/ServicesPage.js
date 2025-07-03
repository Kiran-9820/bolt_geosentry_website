import React, { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Geofencing, Fleet Management, Geo Tracking, API, and SDK Integration";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* PAGE TITLE */}
      <section className="p-0 bg-primary-solid">
        {/* banner container */}
        <div className="container d-table">
          <div className="d-table-cell py-6 py-lg-6">
            <div className="row align-items-center z-index-9 position-relative">
              {/* left banner text */}
              <div className="col-lg-12 mb-4 mb-lg-0">
                <div className="header-text">
                  <h1 className="text-white text-center service-header mb-1-6 mb-md-1-9">
                    GPS Tracking, Routing API, and Geofencing –<br /> Powered by
                    AI on Google Cloud Platform
                  </h1>
                </div>
              </div>
              {/* end banner text */}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Management Section */}
      <section className="md-home bg-light-grey border-bottom border-color-light-dark pb-0">
        <div className="text-center wow fadeIn" data-wow-delay=".2s">
          <h2 className="mb-0 h1 text-dark">
            Discover Our Exclusive Business Solutions
          </h2>
        </div>
        <div className="container mt-4">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 order-2 order-lg-1">
              <div className="pe-0 pe-lg-5">
                <h2 className="mx-md-auto ms-0 text-center text-lg-start h3 mb-4">
                  Streamlined Fleet Management
                </h2>
                <div id="accordionFleet" className="accordion-style01">
                  <div className="card">
                    <div className="card-header" id="headingFleetOne">
                      <div className="mb-0">
                        <h5 className="btn btn-link">
                          <span className="counts">1</span>
                          <span
                            className="item-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFleetOne"
                            aria-expanded="true"
                            aria-controls="collapseFleetOne"
                          >
                            What is Streamlined Fleet Management with Geosentry
                            ?
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="collapseFleetOne"
                      className="collapse show"
                      aria-labelledby="headingFleetOne"
                      data-bs-parent="#accordionFleet"
                    >
                      <div className="card-body">
                        Geosentry leverages state-of-the-art AI technology for
                        effortless fleet management, allowing precise tracking
                        and maintenance of a diverse array of vehicles. This
                        advanced approach optimises efficiency, saving both time
                        and costs with innovative technological solutions.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFleetTwo">
                      <div className="mb-0">
                        <h5 className="btn btn-link collapsed">
                          <span className="counts">2</span>
                          <span
                            className="item-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFleetTwo"
                            aria-expanded="false"
                            aria-controls="collapseFleetTwo"
                          >
                            Features of Geosentry's Streamlined Fleet Management
                            Product
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="collapseFleetTwo"
                      className="collapse"
                      aria-labelledby="headingFleetTwo"
                      data-bs-parent="#accordionFleet"
                    >
                      <div className="card-body">
                        <ul className="list-style7">
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Real-time Vehicle Tracking:</strong>{" "}
                            Geosentry utilises GPS technology for continuous,
                            real-time tracking of your fleet's vehicles. This
                            functionality enhances operational safety, optimizes
                            routes for efficiency, and monitors driving
                            patterns, ensuring a comprehensive approach to fleet
                            management.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Route Optimisation:</strong> Geosentry can
                            help you optimise your routes to save time and fuel.
                            The software uses historical data to calculate the
                            most efficient routes for your vehicles, taking into
                            account factors such as traffic conditions, road
                            closures, and more.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Maintenance Alerts:</strong> Geosentry's
                            maintenance alerts ensure fleet management by
                            notifying you when your vehicles require
                            maintenance, utilizing simple technology to prevent
                            breakdowns and maximize vehicle lifespan.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Reports and Analytics:</strong> Utilise
                            Geosentry's data-driven reports and analytics to
                            make intelligent decisions for your fleet. By
                            examining essential metrics, you can optimise the
                            overall efficiency of your vehicles and operations.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 order-1 order-lg-2 mb-5 mb-lg-0 text-center text-lg-end">
              <img
                src="/img/content/fleet-management-3.png"
                className="img-effect img-service"
                alt="Fleet Management"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GPS Tracking Section */}
      <section className="p-0">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-7 col-md-12 order-2 order-lg-1">
              <div className="pe-0 ps-lg-5">
                <h2 className="mx-md-auto ms-0 text-center text-lg-start h3 mb-4">
                  Real-time GPS Tracking
                </h2>
                <div id="accordionGPS" className="accordion-style01">
                  <div className="card">
                    <div className="card-header" id="headingGPSOne">
                      <div className="mb-0">
                        <h5 className="btn btn-link">
                          <span className="counts">1</span>
                          <span
                            className="item-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGPSOne"
                            aria-expanded="true"
                            aria-controls="collapseGPSOne"
                          >
                            What is Real-time GPS Tracking with Geosentry?
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="collapseGPSOne"
                      className="collapse show"
                      aria-labelledby="headingGPSOne"
                      data-bs-parent="#accordionGPS"
                    >
                      <div className="card-body">
                        Geosentry provides real-time GPS tracking, which is
                        similar to having a high-tech map that shows you where
                        vehicles, important items, or people are right now. It
                        constantly updates you on their specific location,
                        allowing you to better manage their situation, keep them
                        safe, and make wiser decisions. It helps ensure that
                        important information gets to the appropriate location,
                        and it also helps you understand how people move around.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingGPSTwo">
                      <div className="mb-0">
                        <h5 className="btn btn-link collapsed">
                          <span className="counts">2</span>
                          <span
                            className="item-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGPSTwo"
                            aria-expanded="false"
                            aria-controls="collapseGPSTwo"
                          >
                            Features of Geosentry's GPS Tracking Product
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="collapseGPSTwo"
                      className="collapse"
                      aria-labelledby="headingGPSTwo"
                      data-bs-parent="#accordionGPS"
                    >
                      <div className="card-body">
                        <ul className="list-style7">
                          <li>
                            <i className="fas fa-check"></i>
                            <strong> Effortless Deployment:</strong> Geosentry's
                            GPS trackers function like plug-and-play devices,
                            allowing for quick installation in just a few
                            minutes without the need for specialized hardware or
                            software.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Pinpoint Precision:</strong> Geosentry's
                            trackers provide highly accurate location data with
                            pinpoint precision, ensuring hassle-free and
                            actionable insights for effective monitoring and
                            management.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Custom Virtual Boundaries:</strong>{" "}
                            Geosentry's smart mobile app lets you effortlessly
                            handle your trackers and stay connected to real-time
                            information while on the move. Keep tabs on your
                            assets' locations, establish alerts, and receive
                            notifications when they enter or exit geo-fenced
                            areas.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Managing Vehicles Easily:</strong> Geosentry
                            is a great tool for managing vehicles. You can track
                            the location of your vehicles, view their speed and
                            direction, and even get alerts if they exceed speed
                            limits or enter restricted areas. This information
                            can help you improve fleet efficiency, reduce fuel
                            costs, and protect your vehicles from theft.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 order-1 order-lg-2 mb-5 mb-lg-0 text-center text-lg-end">
              <img
                src="/img/content/gps-tracking.png"
                alt="GPS Tracking"
                className="img-effect img-service"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geofencing Section */}
      <section className="md bg-light-grey border-bottom border-color-light-dark p-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 order-2 order-lg-1">
              <div className="pe-0 pe-lg-5">
                <h2 className="mx-md-auto ms-0 text-center text-lg-start h3 mb-4">
                  Customizable Geofencing
                </h2>
                <div id="accordionGeofencing" className="accordion-style01">
                  <div className="card">
                    <div className="card-header" id="headingGeofencingOne">
                      <div className="mb-0">
                        <h5 className="btn btn-link">
                          <span className="counts">1</span>
                          <span
                            className="item-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeofencingOne"
                            aria-expanded="true"
                            aria-controls="collapseGeofencingOne"
                          >
                            What is Customizable Geofencing with Geosentry?
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="collapseGeofencingOne"
                      className="collapse show"
                      aria-labelledby="headingGeofencingOne"
                      data-bs-parent="#accordionGeofencing"
                    >
                      <div className="card-body">
                        Customisable Geofencing with Geosentry is a cutting-edge
                        technology that allows organisations to establish and
                        control virtual borders around physical locations on a
                        map. With this technology, companies can automate what
                        happens when something enters or exits specific
                        locations.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingGeofencingTwo">
                      <div className="mb-0">
                        <h5 className="btn btn-link collapsed">
                          <span className="counts">2</span>
                          <span
                            className="item-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeofencingTwo"
                            aria-expanded="false"
                            aria-controls="collapseGeofencingTwo"
                          >
                            Features of Geosentry's Customisable Geofencing
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="collapseGeofencingTwo"
                      className="collapse"
                      aria-labelledby="headingGeofencingTwo"
                      data-bs-parent="#accordionGeofencing"
                    >
                      <div className="card-body">
                        <ul className="list-style7">
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Create Your Own Zones:</strong> With
                            Geosentry, you can create custom zones of any shape
                            or size. This allows you to track and monitor
                            specific areas, such as loading zones, restricted
                            areas, or even the perimeter of your property. You
                            can also use Geosentry to create zones based on
                            time, so you can track when vehicles enter or leave
                            specific areas.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Get Instant Alerts:</strong> Geosentry uses
                            advanced mapping technology to track the movement of
                            assets and people. When something enters or leaves a
                            designated zone, you'll receive an instant alert.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Improve Security:</strong> Geosentry boosts
                            security through customisable geofencing, triggering
                            alerts for unauthorised entry or exit within
                            designated zones. This feature is vital for
                            safeguarding assets and ensuring prompt notification
                            of any irregularities related to your vehicles.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Learn from Data:</strong> Utilize
                            Geosentry's customizable geofencing to gather data
                            insights on how people and assets navigate your
                            geo-space. Leverage this information to boost
                            efficiency, spot potential issues, and make informed
                            decisions for optimizing your geo-space usage.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 order-1 order-lg-2 mb-5 mb-lg-0 text-center text-lg-end">
              <img
                src="/img/content/customizable-Geofencing.png"
                className="img-effect img-service"
                alt="Customizable Geofencing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API and SDK Section */}
      <section className="mb-0 p-0">
        <div className="container mb-0">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-7 col-md-8 order-2 order-lg-1">
              <div className="pe-0 ps-lg-5">
                <h2 className="mx-md-auto ms-0 text-center text-lg-start h3 mb-4">
                  API and SDK for Easy Integration
                </h2>
                <div id="accordionAPI" className="accordion-style01">
                  <div className="card">
                    <div className="card-header" id="headingAPIOne">
                      <div className="mb-0">
                        <h5 className="btn btn-link">
                          <span className="counts">1</span>
                          <span
                            className="item-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAPIOne"
                            aria-expanded="true"
                            aria-controls="collapseAPIOne"
                          >
                            What is API and SDK for Easy Integration with
                            Geosentry?
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="collapseAPIOne"
                      className="collapse show"
                      aria-labelledby="headingAPIOne"
                      data-bs-parent="#accordionAPI"
                    >
                      <div className="card-body">
                        Our APIs and SDKs seamlessly integrate with other
                        software, allowing direct communication with Geosentry
                        and facilitating smooth data sharing for seamless
                        project collaboration.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingAPITwo">
                      <div className="mb-0">
                        <h5 className="btn btn-link collapsed">
                          <span className="counts">2</span>
                          <span
                            className="item-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAPITwo"
                            aria-expanded="false"
                            aria-controls="collapseAPITwo"
                          >
                            Geosentry's API and SDK for Easy Integration have
                            these important features
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div
                      id="collapseAPITwo"
                      className="collapse"
                      aria-labelledby="headingAPITwo"
                      data-bs-parent="#accordionAPI"
                    >
                      <div className="card-body">
                        <ul className="list-style7">
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Streamlined Integration:</strong>{" "}
                            Geosentry's APIs and SDKs make it easy to connect
                            Geosentry to other software applications.
                            Effortlessly, you can start exchanging data between
                            Geosentry and your existing systems.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Seamless Data Exchange:</strong> Geosentry's
                            APIs and SDKs support a wide range of data formats,
                            making it easy to exchange data between Geosentry
                            and other software applications.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Tailored Functionality:</strong> Geosentry's
                            APIs and SDKs can be customised to meet your
                            specific requirements and workflows.
                          </li>
                          <li>
                            <i className="fas fa-check"></i>
                            <strong>Universal Compatibility:</strong> Integrate
                            Geosentry with a wide range of software platforms
                            and solutions.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-8 order-1 order-lg-2 mb-3 mb-lg-0 text-center text-lg-end">
              <img
                src="/img/content/api-and-sdk.png"
                alt="API and SDK"
                className="img-effect img-service"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Safety Section */}
      <section className="parallax cover-background bg-light-grey">
        <div className="container">
          <div className="text-center section-heading text-dark">
            <h1>Advanced Safety and In-Depth Data Insights</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="card card-style09 line-dark">
                <div className="card-body text-dark">
                  <div className="mb-2">
                    <i className="">
                      <img
                        src="/img/icon/security (2).svg"
                        className="img-fluid w-15"
                        alt="Enhanced Security"
                      />
                    </i>
                  </div>
                  <h3 className="title text-dark">
                    Enhanced Security Features
                  </h3>
                  <p className="mb-0 display-30">
                    Using Google Cloud Platform's data security ensures that all
                    location data is stored securely and can be accessed through
                    our cloud-based software platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card card-style09 mb-0">
                <div className="card-body text-dark">
                  <div className="mb-3">
                    <i className="">
                      <img
                        src="/img/icon/Detailed_reporting_and_analytics (2).svg"
                        className="img-fluid w-15"
                        alt="Detailed Reporting"
                      />
                    </i>
                  </div>
                  <h3 className="title text-dark">
                    Detailed Reporting and Analytics
                  </h3>
                  <p className="mt-2 display-30">
                    Geosentry's AI-driven algorithms analysis location data to
                    provide meaningful insights with predictive analytics for
                    efficiency and behavior analysis to learn about user
                    patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="footer-bottom-bg parallax fadeInUp primary-overlay-90 mt-2 cover-background md"
        data-overlay-dark="9"
      >
        <div className="container">
          <div className="row position-relative z-index-1 align-items-center">
            <div className="col-lg-9 text-center text-lg-start mb-3 mb-lg-0">
              <h5 className="text-white">
                If you are looking for a GPS tracking solution that is powered
                by AI and built on the Google Cloud Platform, then Geosentry is
                the perfect solution for you.
              </h5>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <a href="/contact" className="butn style-two">
                <span className="font-weight-600">
                  Connect with our experts
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
