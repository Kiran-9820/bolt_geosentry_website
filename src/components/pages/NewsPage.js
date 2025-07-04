import React, { useEffect } from "react";

const NewsPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Advanced Fleet Management, Geofencing, and Geo Tracking";
    window.scrollTo(0, 0);
  }, []);

  // Initialize news page functionality
  useEffect(() => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.news-filter-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    if (filterButtons.length && newsItems.length) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          const filter = this.getAttribute('data-filter');
          
          // Show/hide news items based on filter
          newsItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
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

      {/* News Filter Section */}
      <section className="py-5 bg-light">
        <div className="container position-relative z-index-9">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-heading5 wow fadeInUp" data-wow-delay=".1s">
                <h2 className="mb-0 h1 z-index-9 position-relative">Latest News</h2>
                <span className="title-shape"></span>
                <p className="mt-4 text-muted">Stay updated with the latest announcements, press releases, and company news from Geosentry.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="news-filter text-center text-lg-end mt-4 mt-lg-0">
                <button className="btn btn-primary rounded-pill px-4 py-2 me-2 mb-2 news-filter-btn active" data-filter="all">All News</button>
                <button className="btn btn-outline-primary rounded-pill px-4 py-2 me-2 mb-2 news-filter-btn" data-filter="press-release">Press Releases</button>
                <button className="btn btn-outline-primary rounded-pill px-4 py-2 me-2 mb-2 news-filter-btn" data-filter="company-news">Company News</button>
                <button className="btn btn-outline-primary rounded-pill px-4 py-2 mb-2 news-filter-btn" data-filter="investment">Investment News</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-5">
        <div className="container">
          {/* Featured News Item */}
          <div className="news-item investment mb-5 wow fadeInUp">
            <div className="card border-0 shadow-lg rounded-3 overflow-hidden">
              <div className="row g-0">
                <div className="col-lg-4">
                  <div className="h-100 d-flex flex-column justify-content-center p-4 p-lg-5 text-center" style={{
                    background: "linear-gradient(to right, #444599, #33bab3)"
                  }}>
                    <div className="mb-4">
                      <span className="display-4 text-white d-block mb-3">
                        <i className="fas fa-newspaper"></i>
                      </span>
                      <h3 className="h4 text-white mb-0">Investment Announcement</h3>
                    </div>
                    <div className="news-date bg-white text-center py-2 px-3 d-inline-block mx-auto rounded">
                      <span className="d-block text-primary">May 10</span>
                      <span className="d-block text-primary font-weight-600">2025</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="p-4 p-lg-5 h-100 bg-white">
                    <div className="mb-4">
                      <h2 className="h1 mb-3 text-primary">Geosentry.ai Secures Strategic Investment from Advayax Ventures</h2>
                      <p className="mb-4 font-weight-500 text-muted">Bangalore, India – May 10, 2025</p>
                    </div>
                    <p className="mb-4">We're excited to announce that Advayax Ventures, a Bangalore-based venture capital firm, has formally invested in Geosentry.ai, a next-generation startup pioneering the development of powerful geospatial intelligence platforms.</p>
                    <p className="mb-4">This strategic partnership reflects Advayax's strong confidence in Geosentry's mission to revolutionize spatial data analytics through cutting-edge AI and machine learning. The collaboration is focused on enabling advanced applications across urban planning, defense, logistics, and smart infrastructure, both in India and on the global stage.</p>
                    <div className="d-flex flex-wrap mt-4">
                      <a href="#!" className="btn btn-primary rounded-pill px-4 py-2 me-3 mb-2">Read Full Press Release</a>
                      <a href="#!" className="btn btn-outline-primary rounded-pill px-4 py-2 mb-2">Share <i className="fas fa-share-alt ms-1"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="row g-4">
            {/* News Item 1 */}
            <div className="col-md-6 col-lg-4 news-item press-release">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img src="/img/content/map.png" alt="News" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                    <div className="news-category position-absolute top-0 start-0 bg-primary text-white py-1 px-3 m-3">
                      Press Release
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 25, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">Geosentry Launches New API for Enhanced Location Intelligence</h3>
                    <p className="news-excerpt text-muted mb-3">Geosentry announces the release of its new Location Intelligence API, designed to provide businesses with advanced spatial analytics capabilities.</p>
                    <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* News Item 2 */}
            <div className="col-md-6 col-lg-4 news-item company-news">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img src="/img/content/fleet-management-3.png" alt="News" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                    <div className="news-category position-absolute top-0 start-0 bg-success text-white py-1 px-3 m-3">
                      Company News
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 20, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">Geosentry Expands Operations to Southeast Asia</h3>
                    <p className="news-excerpt text-muted mb-3">Geosentry announces expansion into Southeast Asian markets with new offices in Singapore and partnerships with local logistics companies.</p>
                    <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* News Item 3 */}
            <div className="col-md-6 col-lg-4 news-item press-release">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img src="/img/content/gps-tracking.png" alt="News" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                    <div className="news-category position-absolute top-0 start-0 bg-primary text-white py-1 px-3 m-3">
                      Press Release
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 15, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">Geosentry Partners with Leading Logistics Provider</h3>
                    <p className="news-excerpt text-muted mb-3">Geosentry announces strategic partnership with FastTrack Logistics to enhance fleet management capabilities across India.</p>
                    <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* News Item 4 */}
            <div className="col-md-6 col-lg-4 news-item company-news">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img src="/img/content/api-and-sdk.png" alt="News" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                    <div className="news-category position-absolute top-0 start-0 bg-success text-white py-1 px-3 m-3">
                      Company News
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 10, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">Geosentry Achieves ISO 27001 Certification</h3>
                    <p className="news-excerpt text-muted mb-3">Geosentry is proud to announce that it has achieved ISO 27001 certification, demonstrating our commitment to information security.</p>
                    <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* News Item 5 */}
            <div className="col-md-6 col-lg-4 news-item investment">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img src="/img/bg/cloud-bg.jpg" alt="News" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                    <div className="news-category position-absolute top-0 start-0 bg-warning text-dark py-1 px-3 m-3">
                      Investment
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 5, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">Geosentry Completes Series A Funding Round</h3>
                    <p className="news-excerpt text-muted mb-3">Geosentry announces the successful completion of its Series A funding round, raising $10 million to accelerate growth and product development.</p>
                    <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* News Item 6 */}
            <div className="col-md-6 col-lg-4 news-item press-release">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-body p-0">
                  <div className="news-img position-relative">
                    <img src="/img/content/customizable-Geofencing.png" alt="News" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                    <div className="news-category position-absolute top-0 start-0 bg-primary text-white py-1 px-3 m-3">
                      Press Release
                    </div>
                    <div className="news-date position-absolute top-0 end-0 bg-dark text-white py-1 px-3 m-3">
                      Apr 1, 2025
                    </div>
                  </div>
                  <div className="news-content p-4">
                    <h3 className="news-title h5 mb-3">Geosentry Introduces Advanced Geofencing Solution</h3>
                    <p className="news-excerpt text-muted mb-3">Geosentry launches its next-generation geofencing solution with enhanced customization options and real-time alerts.</p>
                    <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-5">
            <button className="btn btn-primary rounded-pill px-5 py-2">Load More News <i className="fas fa-sync-alt ms-2"></i></button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="h3 text-white mb-3">Subscribe to Our Newsletter</h2>
              <p className="mb-0">Stay updated with the latest news, product updates, and industry insights from Geosentry.</p>
            </div>
            <div className="col-lg-6">
              <form className="d-flex">
                <input type="email" className="form-control form-control-lg rounded-pill-start" placeholder="Enter your email" />
                <button type="submit" className="btn btn-light rounded-pill-end px-4">Subscribe</button>
              </form>
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
