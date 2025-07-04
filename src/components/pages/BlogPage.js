import React, { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    document.title =
      "Geosentry: AI-Powered Geo Services for Advanced Fleet Management, Geofencing, and Geo Tracking";
    window.scrollTo(0, 0);
  }, []);

  // Initialize carousel and other UI elements
  useEffect(() => {
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery(".featured-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        dots: true,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ]
      });
      
      window.jQuery(".blog-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 800,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 }
        }
      });
    }
    
    // Initialize search functionality
    const searchInput = document.getElementById('blog-search-input');
    if (searchInput) {
      searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        const blogCards = document.querySelectorAll('.blog-card');
        
        blogCards.forEach(card => {
          const title = card.querySelector('.blog-title').textContent.toLowerCase();
          const content = card.querySelector('.blog-excerpt').textContent.toLowerCase();
          
          if (title.includes(searchTerm) || content.includes(searchTerm)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
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
                    Latest Blogs and Updates from Geosentry.
                  </h1>
                </div>
              </div>
              {/* end banner text */}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Header Section with Search */}
      <section className="py-5 bg-light">
        <div className="container position-relative z-index-9">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-heading5 wow fadeInUp" data-wow-delay=".1s">
                <h2 className="mb-0 h1 z-index-9 position-relative">Our Blog</h2>
                <span className="title-shape"></span>
                <p className="mt-4 text-muted">Discover insights, updates, and expert knowledge about location-based technologies and solutions.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-search-box position-relative">
                <input type="text" id="blog-search-input" className="form-control py-3 px-4 rounded-pill" placeholder="Search articles..." />
                <button className="btn position-absolute end-0 top-0 bottom-0 rounded-pill px-4">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="blog-categories mt-3 d-flex flex-wrap justify-content-lg-end">
                <a href="#!" className="badge bg-primary rounded-pill py-2 px-3 me-2 mb-2">All</a>
                <a href="#!" className="badge bg-light text-dark rounded-pill py-2 px-3 me-2 mb-2">Technology</a>
                <a href="#!" className="badge bg-light text-dark rounded-pill py-2 px-3 me-2 mb-2">Integration</a>
                <a href="#!" className="badge bg-light text-dark rounded-pill py-2 px-3 me-2 mb-2">Cloud</a>
                <a href="#!" className="badge bg-light text-dark rounded-pill py-2 px-3 mb-2">Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post Carousel */}
      <section className="py-0">
        <div className="container-fluid px-0">
          <div className="featured-carousel owl-carousel owl-theme">
            {/* Featured Item 1 */}
            <div className="item">
              <div className="featured-blog-post position-relative">
                <div className="featured-image" style={{ 
                  backgroundImage: "url('/img/bg/cloud-bg.jpg')",
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay" style={{ 
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}></div>
                </div>
                <div className="featured-content position-absolute bottom-0 start-0 p-5 w-100">
                  <div className="featured-meta mb-3">
                    <span className="badge bg-primary me-2">Cloud</span>
                    <span className="text-white"><i className="far fa-calendar-alt me-1"></i> May 15, 2025</span>
                    <span className="text-white ms-3"><i className="far fa-clock me-1"></i> 5 min read</span>
                  </div>
                  <h2 className="featured-title text-white mb-3">Scaling Geosentry with Google Cloud: A Cloud-Native Approach to Geospatial Intelligence</h2>
                  <p className="featured-excerpt text-white mb-4">As a startup focused on solving real-world challenges using geospatial data, we at Geosentry needed a cloud infrastructure that could scale with our vision.</p>
                  <a href="#!" className="btn btn-light rounded-pill px-4 py-2">Read More <i className="fas fa-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="item">
              <div className="featured-blog-post position-relative">
                <div className="featured-image" style={{ 
                  backgroundImage: "url('/img/content/map.png')",
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div className="overlay" style={{ 
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }}></div>
                </div>
                <div className="featured-content position-absolute bottom-0 start-0 p-5 w-100">
                  <div className="featured-meta mb-3">
                    <span className="badge bg-primary me-2">Maps</span>
                    <span className="text-white"><i className="far fa-calendar-alt me-1"></i> May 10, 2025</span>
                    <span className="text-white ms-3"><i className="far fa-clock me-1"></i> 7 min read</span>
                  </div>
                  <h2 className="featured-title text-white mb-3">Mapping the Future: How Geosentry Leverages Google Maps for Real-Time Location Intelligence</h2>
                  <p className="featured-excerpt text-white mb-4">At Geosentry, we're reimagining how location data is used in logistics, infrastructure, and smart city planning.</p>
                  <a href="#!" className="btn btn-light rounded-pill px-4 py-2">Read More <i className="fas fa-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-grid">
                <div className="row g-4">
                  {/* Blog Card 1 */}
                  <div className="col-md-6">
                    <div className="blog-card h-100 shadow-sm rounded-3 overflow-hidden">
                      <div className="blog-img position-relative">
                        <img src="/img/content/map.png" alt="Blog" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                        <div className="blog-date position-absolute top-0 end-0 bg-primary text-white py-2 px-3 m-3 rounded">
                          <span className="d-block text-center">15</span>
                          <span className="d-block text-center">May</span>
                        </div>
                      </div>
                      <div className="blog-content p-4">
                        <div className="blog-meta mb-3">
                          <span className="me-3"><i className="far fa-user me-1"></i> By Admin</span>
                          <span><i className="far fa-comments me-1"></i> 5 Comments</span>
                        </div>
                        <h3 className="blog-title h5 mb-3">Mapping the Future: How Geosentry Leverages Google Maps</h3>
                        <p className="blog-excerpt text-muted mb-3">At Geosentry, we're reimagining how location data is used in logistics, infrastructure, and smart city planning.</p>
                        <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog Card 2 */}
                  <div className="col-md-6">
                    <div className="blog-card h-100 shadow-sm rounded-3 overflow-hidden">
                      <div className="blog-img position-relative">
                        <img src="/img/bg/cloud-bg.jpg" alt="Blog" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                        <div className="blog-date position-absolute top-0 end-0 bg-primary text-white py-2 px-3 m-3 rounded">
                          <span className="d-block text-center">10</span>
                          <span className="d-block text-center">May</span>
                        </div>
                      </div>
                      <div className="blog-content p-4">
                        <div className="blog-meta mb-3">
                          <span className="me-3"><i className="far fa-user me-1"></i> By Admin</span>
                          <span><i className="far fa-comments me-1"></i> 3 Comments</span>
                        </div>
                        <h3 className="blog-title h5 mb-3">Scaling Geosentry with Google Cloud: A Cloud-Native Approach</h3>
                        <p className="blog-excerpt text-muted mb-3">As a startup focused on solving real-world challenges using geospatial data, we needed a cloud infrastructure that could scale with our vision.</p>
                        <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog Card 3 */}
                  <div className="col-md-6">
                    <div className="blog-card h-100 shadow-sm rounded-3 overflow-hidden">
                      <div className="blog-img position-relative">
                        <img src="/img/content/geofencing-card.png" alt="Blog" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                        <div className="blog-date position-absolute top-0 end-0 bg-primary text-white py-2 px-3 m-3 rounded">
                          <span className="d-block text-center">05</span>
                          <span className="d-block text-center">May</span>
                        </div>
                      </div>
                      <div className="blog-content p-4">
                        <div className="blog-meta mb-3">
                          <span className="me-3"><i className="far fa-user me-1"></i> By Admin</span>
                          <span><i className="far fa-comments me-1"></i> 7 Comments</span>
                        </div>
                        <h3 className="blog-title h5 mb-3">The Power of Geofencing in Modern Fleet Management</h3>
                        <p className="blog-excerpt text-muted mb-3">Discover how geofencing technology is revolutionizing fleet management and enhancing operational efficiency.</p>
                        <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog Card 4 */}
                  <div className="col-md-6">
                    <div className="blog-card h-100 shadow-sm rounded-3 overflow-hidden">
                      <div className="blog-img position-relative">
                        <img src="/img/content/fleet-mangement-card.png" alt="Blog" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                        <div className="blog-date position-absolute top-0 end-0 bg-primary text-white py-2 px-3 m-3 rounded">
                          <span className="d-block text-center">01</span>
                          <span className="d-block text-center">May</span>
                        </div>
                      </div>
                      <div className="blog-content p-4">
                        <div className="blog-meta mb-3">
                          <span className="me-3"><i className="far fa-user me-1"></i> By Admin</span>
                          <span><i className="far fa-comments me-1"></i> 2 Comments</span>
                        </div>
                        <h3 className="blog-title h5 mb-3">AI-Powered Route Optimization: The Future of Logistics</h3>
                        <p className="blog-excerpt text-muted mb-3">Learn how artificial intelligence is transforming route planning and optimization for modern logistics operations.</p>
                        <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pagination */}
                <nav className="mt-5">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#!" tabIndex="-1" aria-disabled="true"><i className="fas fa-chevron-left"></i></a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#!"><i className="fas fa-chevron-right"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="blog-sidebar">
                {/* About Widget */}
                <div className="sidebar-widget bg-light p-4 rounded-3 mb-4">
                  <h4 className="widget-title border-bottom pb-3 mb-3">About Geosentry</h4>
                  <p>Geosentry is a leading provider of AI-powered GPS tracking and geofencing solutions built on Google Cloud Platform.</p>
                  <a href="/about" className="btn btn-sm btn-primary rounded-pill">Learn More</a>
                </div>
                
                {/* Recent Posts Widget */}
                <div className="sidebar-widget bg-light p-4 rounded-3 mb-4">
                  <h4 className="widget-title border-bottom pb-3 mb-3">Recent Posts</h4>
                  <div className="recent-post d-flex mb-3">
                    <div className="recent-post-img me-3">
                      <img src="/img/content/map.png" alt="Recent Post" className="img-fluid rounded" style={{width: "70px", height: "70px", objectFit: "cover"}} />
                    </div>
                    <div className="recent-post-content">
                      <h6 className="mb-1"><a href="#!" className="text-dark">Mapping the Future with Google Maps</a></h6>
                      <span className="text-muted small"><i className="far fa-calendar-alt me-1"></i> May 15, 2025</span>
                    </div>
                  </div>
                  <div className="recent-post d-flex mb-3">
                    <div className="recent-post-img me-3">
                      <img src="/img/bg/cloud-bg.jpg" alt="Recent Post" className="img-fluid rounded" style={{width: "70px", height: "70px", objectFit: "cover"}} />
                    </div>
                    <div className="recent-post-content">
                      <h6 className="mb-1"><a href="#!" className="text-dark">Scaling with Google Cloud</a></h6>
                      <span className="text-muted small"><i className="far fa-calendar-alt me-1"></i> May 10, 2025</span>
                    </div>
                  </div>
                  <div className="recent-post d-flex">
                    <div className="recent-post-img me-3">
                      <img src="/img/content/geofencing-card.png" alt="Recent Post" className="img-fluid rounded" style={{width: "70px", height: "70px", objectFit: "cover"}} />
                    </div>
                    <div className="recent-post-content">
                      <h6 className="mb-1"><a href="#!" className="text-dark">The Power of Geofencing</a></h6>
                      <span className="text-muted small"><i className="far fa-calendar-alt me-1"></i> May 05, 2025</span>
                    </div>
                  </div>
                </div>
                
                {/* Categories Widget */}
                <div className="sidebar-widget bg-light p-4 rounded-3 mb-4">
                  <h4 className="widget-title border-bottom pb-3 mb-3">Categories</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="border-bottom pb-2 mb-2"><a href="#!" className="d-flex justify-content-between text-dark"><span>Technology</span> <span className="badge bg-primary rounded-pill">5</span></a></li>
                    <li className="border-bottom pb-2 mb-2"><a href="#!" className="d-flex justify-content-between text-dark"><span>Integration</span> <span className="badge bg-primary rounded-pill">3</span></a></li>
                    <li className="border-bottom pb-2 mb-2"><a href="#!" className="d-flex justify-content-between text-dark"><span>Cloud</span> <span className="badge bg-primary rounded-pill">2</span></a></li>
                    <li><a href="#!" className="d-flex justify-content-between text-dark"><span>Maps</span> <span className="badge bg-primary rounded-pill">4</span></a></li>
                  </ul>
                </div>
                
                {/* Tags Widget */}
                <div className="sidebar-widget bg-light p-4 rounded-3">
                  <h4 className="widget-title border-bottom pb-3 mb-3">Tags</h4>
                  <div className="tags">
                    <a href="#!" className="badge bg-white text-dark border py-2 px-3 me-2 mb-2 d-inline-block">GPS</a>
                    <a href="#!" className="badge bg-white text-dark border py-2 px-3 me-2 mb-2 d-inline-block">Tracking</a>
                    <a href="#!" className="badge bg-white text-dark border py-2 px-3 me-2 mb-2 d-inline-block">Geofencing</a>
                    <a href="#!" className="badge bg-white text-dark border py-2 px-3 me-2 mb-2 d-inline-block">Cloud</a>
                    <a href="#!" className="badge bg-white text-dark border py-2 px-3 me-2 mb-2 d-inline-block">AI</a>
                    <a href="#!" className="badge bg-white text-dark border py-2 px-3 me-2 mb-2 d-inline-block">Maps</a>
                    <a href="#!" className="badge bg-white text-dark border py-2 px-3 me-2 mb-2 d-inline-block">API</a>
                    <a href="#!" className="badge bg-white text-dark border py-2 px-3 mb-2 d-inline-block">SDK</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts Carousel */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-heading5 text-center wow fadeInUp mb-5" data-wow-delay=".1s">
            <h2 className="mb-0 h2 z-index-9 position-relative">You May Also Like</h2>
            <span className="title-shape"></span>
          </div>
          
          <div className="blog-carousel owl-carousel owl-theme">
            {/* Related Blog 1 */}
            <div className="item">
              <div className="blog-card h-100 shadow-sm rounded-3 overflow-hidden">
                <div className="blog-img">
                  <img src="/img/content/3d-view-map.jpg" alt="Blog" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                </div>
                <div className="blog-content p-4">
                  <div className="blog-meta mb-3">
                    <span className="me-3"><i className="far fa-calendar-alt me-1"></i> Apr 25, 2025</span>
                    <span><i className="far fa-comments me-1"></i> 4 Comments</span>
                  </div>
                  <h3 className="blog-title h5 mb-3">3D Mapping: The Next Frontier in Location Visualization</h3>
                  <p className="blog-excerpt text-muted mb-3">Explore how 3D mapping is transforming the way we visualize and interact with spatial data.</p>
                  <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More</a>
                </div>
              </div>
            </div>
            
            {/* Related Blog 2 */}
            <div className="item">
              <div className="blog-card h-100 shadow-sm rounded-3 overflow-hidden">
                <div className="blog-img">
                  <img src="/img/content/api-and-sdk.png" alt="Blog" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                </div>
                <div className="blog-content p-4">
                  <div className="blog-meta mb-3">
                    <span className="me-3"><i className="far fa-calendar-alt me-1"></i> Apr 20, 2025</span>
                    <span><i className="far fa-comments me-1"></i> 6 Comments</span>
                  </div>
                  <h3 className="blog-title h5 mb-3">Integrating Location Services: API vs SDK Approaches</h3>
                  <p className="blog-excerpt text-muted mb-3">A comprehensive comparison of API and SDK integration methods for location-based services.</p>
                  <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More</a>
                </div>
              </div>
            </div>
            
            {/* Related Blog 3 */}
            <div className="item">
              <div className="blog-card h-100 shadow-sm rounded-3 overflow-hidden">
                <div className="blog-img">
                  <img src="/img/content/gps-tracking.png" alt="Blog" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                </div>
                <div className="blog-content p-4">
                  <div className="blog-meta mb-3">
                    <span className="me-3"><i className="far fa-calendar-alt me-1"></i> Apr 15, 2025</span>
                    <span><i className="far fa-comments me-1"></i> 3 Comments</span>
                  </div>
                  <h3 className="blog-title h5 mb-3">The Evolution of GPS Tracking Technology</h3>
                  <p className="blog-excerpt text-muted mb-3">From basic location tracking to advanced AI-powered insights: the journey of GPS technology.</p>
                  <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More</a>
                </div>
              </div>
            </div>
            
            {/* Related Blog 4 */}
            <div className="item">
              <div className="blog-card h-100 shadow-sm rounded-3 overflow-hidden">
                <div className="blog-img">
                  <img src="/img/content/customizable-Geofencing.png" alt="Blog" className="img-fluid w-100" style={{height: "200px", objectFit: "cover"}} />
                </div>
                <div className="blog-content p-4">
                  <div className="blog-meta mb-3">
                    <span className="me-3"><i className="far fa-calendar-alt me-1"></i> Apr 10, 2025</span>
                    <span><i className="far fa-comments me-1"></i> 5 Comments</span>
                  </div>
                  <h3 className="blog-title h5 mb-3">Advanced Geofencing Techniques for Business Applications</h3>
                  <p className="blog-excerpt text-muted mb-3">Discover innovative ways businesses are leveraging geofencing to enhance operations and customer experiences.</p>
                  <a href="#!" className="btn btn-sm btn-outline-primary rounded-pill">Read More</a>
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

export default BlogPage;
