import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found | Geosentry";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-8 position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="error-page">
              <h1 className="display-1 text-secondary mb-0">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="w-95 w-md-80 mx-auto mb-5">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              <Link to="/" className="butn style-one">Back to Home</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFoundPage;