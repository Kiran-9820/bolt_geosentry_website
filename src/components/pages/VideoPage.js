import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const VideoPage = () => {
  useEffect(() => {
    document.title = "Media | Geosentry";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Page Banner */}
      <section className="p-0 bg-primary-solid">
        <div className="container d-table">
          <div className="d-table-cell py-6 py-lg-6">
            <div className="row align-items-center z-index-9 position-relative">
              <div className="col-lg-12 mb-4 mb-lg-0">
                <div className="header-text">
                  <h1 className="text-white text-center service-header mb-1-6 mb-md-1-9">
                    Our Videos: Showcasing Our Expertise
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <div className="mb-6 mb-lg-8 position-relative elements-block">
                <div className="inner-title">
                  <h2 className="mb-0 h4">Revolutionizing Location Data Analysis with AI-Powered Insights</h2>
                </div>
                <iframe 
                  className="w-100 height-400 border-radius-5" 
                  src="https://www.youtube.com/embed/b501aszrEoI?rel=0" 
                  title="Revolutionizing Location Data Analysis"
                  allow="encrypted-media" 
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mb-6 mb-lg-8 position-relative elements-block">
                <div className="inner-title">
                  <h2 className="mb-0 h4">Geosentry Application for User and Vehicle Tracking</h2>
                </div>
                {/* vimeo video section */}
                <div className="height-400">
                  <div 
                    className="story-video bg-img cover-background border-radius-5" 
                    style={{ backgroundImage: 'url("/img/bg/account-cover.jpg")' }}
                    data-overlay-dark="3"
                  >
                    <div className="opacity-extra-medium bg-black"></div>
                    <div className="inner-border"></div>
                    <div className="text-center position-absolute top-50 start-50 translate-middle z-index-1">
                      <a 
                        href="/img/videos/GEO.mp4" 
                        className="icon-play video popup-youtube" 
                        aria-label="Play Geosentry Application Video"
                      >
                        <span className="visually-hidden">Play video</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* end vimeo video section */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default VideoPage;