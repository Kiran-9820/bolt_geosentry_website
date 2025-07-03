import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Geosentry";
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
                    Protecting Your Data: Our Commitment to Privacy
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col md={9}>
              <div className="border rounded p-1-9">
                <h1 className="mb-4">Privacy Policy</h1>
                
                <div className="mb-5">
                  <h2 className="mb-4">Introduction</h2>
                  <p>
                    Welcome to Geosentry! This Privacy Policy outlines how we
                    collect, use, disclose, and protect your personal
                    information when you use our Geo-Services product. By
                    accessing or using Geosentry products, you agree to the
                    terms outlined in this Privacy Policy.
                  </p>
                </div>
                
                <div className="mb-5">
                  <h3 className="mb-2">Information We Collect</h3>
                  <ul className="list-style8 mb-4 ps-0">
                    <li>
                      <strong>User-Provided Information: </strong>
                      <p>When you use Geosentry Product, we may collect the
                        information you provide voluntarily, such as your name,
                        email address, and location data.
                      </p>
                    </li>
                    <li>
                      <strong>Location Information: </strong>
                      <p>Geosentry relies on location services to provide its features. We may collect and store information about your location, including GPS data and other location-based data. Please note that Geosentry may track your location continuously, including in the background, to provide you with accurate and relevant Geo-Services.
                      </p>
                    </li>
                    <li>
                      <strong>Gallery Access: </strong>
                      <p>With your permission, we may access your device's gallery to allow you to upload and change your profile picture. We only access and use the images you select and approve for this purpose.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h3 className="mb-2">How We Use Your Information</h3>
                  <ul className="list-style8 mb-4 ps-0">
                    <li>
                      <strong>Providing Geo-Services: </strong>
                      <p>We use the information collected to deliver and improve our Geo-Services, including
                          location-based features and personalized content.</p>
                    </li>
                    <li>
                      <strong>Real-Time Location Tracking: </strong>
                      <p>The continuous background location tracking is utilized solely to enhance your experience within the app and provide you with relevant Geo-Services. This information is not shared with third parties and is used in accordance with this Privacy Policy.
                      </p>
                    </li>
                    <li>
                      <strong>Profile Customization: </strong>
                      <p>Access to your gallery is used solely for allowing you to upload and change your profile picture within the app.
                      </p>
                    </li>
                    <li>
                      <strong>Analytics and Improvements: </strong>
                      <p>We may use aggregated and anonymized data for analytics and to enhance
                          functionality and performance.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h3 className="mb-2">Data Sharing and Disclosure</h3>
                  <ul className="list-style8 mb-4 ps-0">
                    <li>
                      <strong>Service Providers: </strong>
                      <p>Your information might not be disclosed to outside service providers who help us provide
                          and enhance our Geo Services.</p>
                    </li>
                    <li>
                      <strong>Legal Compliance: </strong>
                      <p>We may disclose your information if required by law or in response to a valid legal
                          request.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h3 className="mb-2">Your Choices</h3>
                  <ul className="list-style8 mb-4 ps-0">
                    <li>
                      <strong>Location Services: </strong>
                      <p>You can control location services through your device settings. However, disabling these
                          services may limit the functionality.</p>
                    </li>
                    <li>
                      <strong>Real-Time Location Tracking: </strong>
                      <p>You can control real-time location tracking through your device settings or by turning off location services when the app is not in use.
                      </p>
                    </li>
                    <li>
                      <strong>Gallery Access: </strong>
                      <p>You can control gallery access through your device settings. Disabling gallery access will prevent you from uploading or changing your profile picture within the app.
                      </p>
                    </li>
                    <li>
                      <strong>Opt-Out: </strong>
                      <p>You can opt-out of certain data collection by adjusting your preferences</p>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-5">
                  <h3 className="mb-2">Security</h3>
                  <p>We take reasonable measures to protect your personal information from unauthorized access, use, or
                    disclosure.</p>
                </div>
                
                <div className="mb-5">
                  <h3 className="mb-2">Changes to This Privacy Policy</h3>
                  <p>We may update this Privacy Policy to reflect changes in our practices. The updated version will be posted on
                      our website, and your continued use of Geosentry constitutes acceptance of the updated terms.</p>
                </div>
                
                <div>
                  <h3 className="mb-4">Contact Us</h3>
                  <p className="mb-0">If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@geosentry.ai">support@geosentry.ai</a></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;