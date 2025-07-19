import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Geofencing, Fleet Management, Geo Tracking, API, and SDK Integration";
    window.scrollTo(0, 0);

    // Initialize animation on scroll
    const scrollElements = document.querySelectorAll(".scroll-animation");
    
    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("animate");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Initial check on load

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <main className="modern-main">
      {/* PAGE TITLE */}
      <section className="p-0 bg-primary-solid">
        <div className="container d-table">
          <div className="d-table-cell py-6 py-lg-6">
            <div className="row align-items-center z-index-9 position-relative">
              <div className="col-lg-12 mb-4 mb-lg-0">
                <div className="header-text">
                  <h1 className="text-white text-center service-header mb-1-6 mb-md-1-9">
                    GPS Tracking, Routing API, and Geofencing –<br /> Powered by
                    AI on Google Cloud Platform
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="section-container">
        <div className="container">
          <div className="section-title-container scroll-animation">
            <div className="section-subtitle">Our Services</div>
            <h2 className="section-title">Discover Our Exclusive Business Solutions</h2>
            <div className="title-separator mx-auto"></div>
            <p className="section-description">
              Leveraging AI and Google Cloud Platform to transform how businesses track, manage, and optimize their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Management Section - Modernized */}
      <section className="section-container alternate-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="service-image-wrapper scroll-animation fade-in-left">
                <img
                  src="/img/content/fleet-management-3.png"
                  className="img-fluid rounded-lg shadow-lg"
                  alt="Fleet Management"
                />
                <div className="image-backdrop"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-content ps-lg-5 scroll-animation fade-in-right">
                <div className="service-icon-container mb-4">
                  <div className="service-icon">
                    <i className="fas fa-truck"></i>
                  </div>
                </div>
                <h2 className="service-title">Streamlined Fleet Management</h2>
                <div className="title-separator"></div>
                <p className="service-description mt-4">
                  Geosentry leverages state-of-the-art AI technology for
                  effortless fleet management, allowing precise tracking
                  and maintenance of a diverse array of vehicles. This
                  advanced approach optimises efficiency, saving both time
                  and costs with innovative technological solutions.
                </p>
                
                <div className="service-features mt-4">
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Real-time Vehicle Tracking</h4>
                      <p>Continuous GPS tracking for enhanced operational safety, optimized routes, and driver behavior monitoring.</p>
                    </div>
                  </div>
                  
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-route"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Route Optimisation</h4>
                      <p>Save time and fuel with data-driven route optimization that accounts for traffic conditions and road closures.</p>
                    </div>
                  </div>
                  
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-tools"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Maintenance Alerts</h4>
                      <p>Proactive notifications when vehicles require maintenance to prevent breakdowns and extend vehicle lifespans.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link to="/service/fleet-management" className="cta-button primary">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GPS Tracking Section - Modernized */}
      <section className="section-container">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="service-image-wrapper scroll-animation fade-in-right">
                <img
                  src="/img/content/gps-tracking.png"
                  className="img-fluid rounded-lg shadow-lg"
                  alt="GPS Tracking"
                />
                <div className="image-backdrop"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-content pe-lg-5 scroll-animation fade-in-left">
                <div className="service-icon-container mb-4">
                  <div className="service-icon">
                    <i className="fas fa-satellite"></i>
                  </div>
                </div>
                <h2 className="service-title">Real-time GPS Tracking</h2>
                <div className="title-separator"></div>
                <p className="service-description mt-4">
                  Geosentry provides real-time GPS tracking, which is
                  similar to having a high-tech map that shows you where
                  vehicles, important items, or people are right now. It
                  constantly updates you on their specific location,
                  allowing you to better manage their situation, keep them
                  safe, and make wiser decisions.
                </p>
                
                <div className="service-features mt-4">
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-plug"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Effortless Deployment</h4>
                      <p>Plug-and-play GPS trackers that install in minutes without specialized hardware or software.</p>
                    </div>
                  </div>
                  
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-crosshairs"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Pinpoint Precision</h4>
                      <p>Highly accurate location data for actionable insights and effective monitoring.</p>
                    </div>
                  </div>
                  
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Smart Mobile App</h4>
                      <p>Manage trackers on the go with our mobile app for real-time information access.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link to="/service/gps-tracking" className="cta-button primary">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geofencing Section - Modernized */}
      <section className="section-container alternate-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="service-image-wrapper scroll-animation fade-in-left">
                <img
                  src="/img/content/customizable-Geofencing.png"
                  className="img-fluid rounded-lg shadow-lg"
                  alt="Customizable Geofencing"
                />
                <div className="image-backdrop"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-content ps-lg-5 scroll-animation fade-in-right">
                <div className="service-icon-container mb-4">
                  <div className="service-icon">
                    <i className="fas fa-border-style"></i>
                  </div>
                </div>
                <h2 className="service-title">Customizable Geofencing</h2>
                <div className="title-separator"></div>
                <p className="service-description mt-4">
                  Customisable Geofencing with Geosentry is a cutting-edge
                  technology that allows organisations to establish and
                  control virtual borders around physical locations on a
                  map. With this technology, companies can automate what
                  happens when something enters or exits specific
                  locations.
                </p>
                
                <div className="service-features mt-4">
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-draw-polygon"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Create Custom Zones</h4>
                      <p>Design geofences of any shape or size to monitor specific areas like loading zones or restricted areas.</p>
                    </div>
                  </div>
                  
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-bell"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Instant Alerts</h4>
                      <p>Receive immediate notifications when assets enter or exit your designated zones.</p>
                    </div>
                  </div>
                  
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Enhanced Security</h4>
                      <p>Protect your assets with alerts for unauthorized entry or exit, ensuring prompt notification of irregularities.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link to="/service/geofencing" className="cta-button primary">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API and SDK Section - Modernized */}
      <section className="section-container">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="service-image-wrapper scroll-animation fade-in-right">
                <img
                  src="/img/content/api-and-sdk.png"
                  className="img-fluid rounded-lg shadow-lg"
                  alt="API and SDK"
                />
                <div className="image-backdrop"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-content pe-lg-5 scroll-animation fade-in-left">
                <div className="service-icon-container mb-4">
                  <div className="service-icon">
                    <i className="fas fa-code"></i>
                  </div>
                </div>
                <h2 className="service-title">API and SDK for Easy Integration</h2>
                <div className="title-separator"></div>
                <p className="service-description mt-4">
                  Our APIs and SDKs seamlessly integrate with other
                  software, allowing direct communication with Geosentry
                  and facilitating smooth data sharing for seamless
                  project collaboration.
                </p>
                
                <div className="service-features mt-4">
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-plug"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Streamlined Integration</h4>
                      <p>Easily connect Geosentry to your existing software applications for effortless data exchange.</p>
                    </div>
                  </div>
                  
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-exchange-alt"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Seamless Data Exchange</h4>
                      <p>Support for multiple data formats to facilitate smooth communication between systems.</p>
                    </div>
                  </div>
                  
                  <div className="service-feature">
                    <div className="feature-icon">
                      <i className="fas fa-tools"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Tailored Functionality</h4>
                      <p>Customizable APIs and SDKs to meet your specific requirements and workflows.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link to="/service/api-sdk" className="cta-button primary">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Safety Section - Modernized */}
      <section className="section-container alternate-bg">
        <div className="container">
          <div className="section-title-container scroll-animation">
            <div className="section-subtitle">Enhanced Features</div>
            <h2 className="section-title">Advanced Safety and In-Depth Data Insights</h2>
            <div className="title-separator mx-auto"></div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="feature-box h-100 scroll-animation fade-in-left">
                <div className="feature-icon">
                  <img
                    src="/img/icon/security (2).svg"
                    alt="Enhanced Security"
                    className="w-50"
                  />
                </div>
                <h3 className="feature-title">Enhanced Security Features</h3>
                <p className="feature-text">
                  Using Google Cloud Platform's data security ensures that all
                  location data is stored securely and can be accessed through
                  our cloud-based software platform. Your sensitive location data
                  is protected with enterprise-grade encryption and security protocols.
                </p>
                <ul className="feature-list">
                  <li>End-to-end encryption</li>
                  <li>Role-based access control</li>
                  <li>Secure API endpoints</li>
                  <li>Regular security audits</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="feature-box h-100 scroll-animation fade-in-right">
                <div className="feature-icon">
                  <img
                    src="/img/icon/Detailed_reporting_and_analytics (2).svg"
                    alt="Detailed Reporting"
                    className="w-50"
                  />
                </div>
                <h3 className="feature-title">Detailed Reporting and Analytics</h3>
                <p className="feature-text">
                  Geosentry's AI-driven algorithms analyze location data to
                  provide meaningful insights with predictive analytics for
                  efficiency and behavior analysis to learn about user
                  patterns. Transform raw data into actionable business intelligence.
                </p>
                <ul className="feature-list">
                  <li>Customizable dashboards</li>
                  <li>Predictive maintenance alerts</li>
                  <li>Trend analysis and forecasting</li>
                  <li>Automated report generation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Modernized */}
      <section className="modern-cta">
        <div className="cta-background-animation">
          <div className="animated-circle circle-1"></div>
          <div className="animated-circle circle-2"></div>
          <div className="animated-circle circle-3"></div>
        </div>
        <div className="container">
          <div className="row position-relative z-index-1 align-items-center">
            <div className="col-lg-9 text-center text-lg-start mb-4 mb-lg-0">
              <span className="cta-tag">Get Started</span>
              <h3 className="cta-heading">Ready to Transform Your Operations?</h3>
              <p className="cta-text">
                If you are looking for a GPS tracking solution that is powered
                by AI and built on the Google Cloud Platform, then Geosentry is
                the perfect solution for you. Our team of experts is ready to help
                you implement the right solution for your business.
              </p>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <a href="/contact" className="cta-button primary">
                Connect With Experts <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
