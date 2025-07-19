import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import PulseGlobe from "../common/PulseGlobe";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - Get in Touch with - Geosentry";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://geosentry-gateway-2cnhe7jc.uc.gateway.dev/rest/v1/in/organizations/send-email",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            "Api-Key": "AIzaSyDNlD3MzsY7I_2GLLs-E3C3ZAn5ByX-P5g",
          },
        }
      );

      await response.text();
      setLoading(false);

      // Show success message with styling that matches the DemoRequestModal
      Swal.fire({
        icon: "success",
        title: "Success",
        html: "Your message has been sent successfully.<br>We'll get back to you shortly!",
        confirmButtonText: "OK",
        confirmButtonColor: "#5e5cc7",
        showClass: {
          popup: "animate__animated animate__fadeIn",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOut",
        },
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setLoading(false);

      Swal.fire({
        icon: "error",
        title: "Error",
        html: "An error occurred while sending your message.<br>Please try again later.",
        confirmButtonText: "OK",
        confirmButtonColor: "#5e5cc7",
        showClass: {
          popup: "animate__animated animate__fadeIn",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOut",
        },
      });
    }
  };

  return (
    <main className="modern-main">
      {/* HERO SECTION WITH MODERN DESIGN */}
      <section className="contact-hero">
        <div className="container">
          <div className="row align-items-center mt-8">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content">
                <span className="hero-badge">Contact Geosentry</span>
                <h1 className="hero-title-large">
                  Get in Touch to Find the
                  <span className="text-gradient"> Right Solution</span> for You
                </h1>
                <p className="hero-subtitle">
                  We're here to help you transform your business with
                  cutting-edge location intelligence. Reach out to our experts
                  for personalized solutions and support.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">24/7</h3>
                    <p className="stat-label">Support Available</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">&lt;2h</h3>
                    <p className="stat-label">Response Time</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">30+</h3>
                    <p className="stat-label">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h4>Let's Talk</h4>
                  <p>Expert consultation</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h4>Email Support</h4>
                  <p>Quick responses</p>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p>Always here to help</p>
                </div>
                <PulseGlobe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gradient-light py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <span className="badge bg-primary-soft text-primary mb-3">
                Contact Information
              </span>
              <h2 className="h1 mb-0">
                Ready to <span className="text-gradient">Connect</span> With Us?
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div
                className="contact-card d-flex flex-column h-100 position-relative overflow-hidden p-4 p-lg-5 bg-white shadow-lg rounded-lg hover-translate-y-sm transition-all wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="contact-icon-wrap mb-4">
                  <div
                    className="contact-icon bg-primary-soft text-primary rounded-pill d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i className="fas fa-comments fa-lg"></i>
                  </div>
                </div>
                <h3 className="h5 mb-3 text-dark fw-bold">Let's Talk</h3>
                <p className="mb-0 text-dark-50">
                  <strong className="text-dark">Phone:</strong> +91 91138-21395
                </p>
                <div className="contact-card-decoration position-absolute bottom-0 end-0 me-3 mb-2 text-primary-soft opacity-20">
                  <i className="fas fa-comments fa-4x"></i>
                </div>
                <div className="card-shine position-absolute w-100 h-100 top-0 start-0"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="contact-card d-flex flex-column h-100 position-relative overflow-hidden p-4 p-lg-5 bg-white shadow-lg rounded-lg hover-translate-y-sm transition-all wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="contact-icon-wrap mb-4">
                  <div
                    className="contact-icon bg-primary-soft text-primary rounded-pill d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i className="fas fa-envelope fa-lg"></i>
                  </div>
                </div>
                <h3 className="h5 mb-3 text-dark fw-bold">E-mail Us</h3>
                <p className="mb-0 text-dark-50">support@geosentry.ai</p>
                <div className="contact-card-decoration position-absolute bottom-0 end-0 me-3 mb-2 text-primary-soft opacity-20">
                  <i className="fas fa-envelope fa-4x"></i>
                </div>
                <div className="card-shine position-absolute w-100 h-100 top-0 start-0"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="contact-card d-flex flex-column h-100 position-relative overflow-hidden p-4 p-lg-5 bg-white shadow-lg rounded-lg hover-translate-y-sm transition-all wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="contact-icon-wrap mb-4">
                  <div
                    className="contact-icon bg-primary-soft text-primary rounded-pill d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i className="fas fa-map-marker-alt fa-lg"></i>
                  </div>
                </div>
                <h3 className="h5 mb-3 text-dark fw-bold">Visit Our Office</h3>
                <p className="mb-0 text-dark-50">
                  #15,3rd Cross Jabbar Block PG Halli Vyalikaval Extn Bangalore
                  North Bangalore Karnataka - 560003 India
                </p>
                <div className="contact-card-decoration position-absolute bottom-0 end-0 me-3 mb-2 text-primary-soft opacity-20">
                  <i className="fas fa-map-marker-alt fa-4x"></i>
                </div>
                <div className="card-shine position-absolute w-100 h-100 top-0 start-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-5 position-relative overflow-hidden">
        <div className="container position-relative z-index-1">
          <div className="row justify-content-between">
            {/* Left side with content */}
            <div className="col-lg-5 pe-lg-4 mb-5 mb-lg-0">
              <div className="contact-content h-100 d-flex flex-column">
                <div className="mb-5">
                  <span className="badge bg-primary-soft text-primary mb-3 px-3 py-2 rounded-pill">
                    Send Message
                  </span>
                  <h2 className="h1 mb-4">
                    We'd <span className="text-gradient"> Love to Hear</span>{" "}
                    From You
                  </h2>
                  <p className="text-dark-50 mb-4">
                    Have questions about our services or need custom solutions?
                    Our team is ready to assist you with personalized support.
                  </p>
                  <div className="contact-benefits mb-5">
                    <div className="benefit-item d-flex align-items-center mb-3">
                      <div
                        className="benefit-icon me-3 bg-primary-soft rounded-circle p-2 d-flex align-items-center justify-content-center"
                        style={{ width: "36px", height: "36px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <p className="mb-0">Dedicated support team</p>
                    </div>
                    <div className="benefit-item d-flex align-items-center mb-3">
                      <div
                        className="benefit-icon me-3 bg-primary-soft rounded-circle p-2 d-flex align-items-center justify-content-center"
                        style={{ width: "36px", height: "36px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <p className="mb-0">Quick response within 2 hours</p>
                    </div>
                    <div className="benefit-item d-flex align-items-center mb-3">
                      <div
                        className="benefit-icon me-3 bg-primary-soft rounded-circle p-2 d-flex align-items-center justify-content-center"
                        style={{ width: "36px", height: "36px" }}
                      >
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <p className="mb-0">
                        Customized solutions for your needs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-image position-relative d-none d-lg-block">
                  <div className="floating-badge position-absolute bg-white shadow-lg rounded-pill px-3 py-2 d-flex align-items-center">
                    <i className="fas fa-comments text-primary me-2"></i>
                    <span>Let's Talk</span>
                  </div>

                  <div
                    className="floating-badge position-absolute bg-white shadow-lg rounded-pill px-3 py-2 d-flex align-items-center"
                    style={{ bottom: "30px", right: "20px" }}
                  >
                    <i className="fas fa-headset text-primary me-2"></i>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side with form */}
            <div className="col-lg-6">
              <div className="form-card bg-white shadow-lg rounded-xl p-4 p-lg-5 border-top border-5 border-primary">
                <div className="loader-container text-center mb-4">
                  <div
                    className="loader"
                    style={{ display: loading ? "inline-block" : "none" }}
                  ></div>
                </div>

                {/* Form */}
                <form
                  id="emailForm"
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="row g-4">
                    {/* Name input */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          className="form-control bg-light border-0 shadow-sm"
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="name">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <div className="icon-wrapper">
                          <i className="fas fa-user text-primary"></i>
                        </div>
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          className="form-control bg-light border-0 shadow-sm"
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <div className="icon-wrapper">
                          <i className="fas fa-envelope text-primary"></i>
                        </div>
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          className="form-control bg-light border-0 shadow-sm"
                          id="subject"
                          type="text"
                          name="subject"
                          placeholder="Your subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="subject">
                          Your Subject <span className="text-danger">*</span>
                        </label>
                        <div className="icon-wrapper">
                          <i className="fas fa-tag text-primary"></i>
                        </div>
                      </div>
                    </div>

                    {/* Phone input */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          className="form-control bg-light border-0 shadow-sm"
                          id="phone"
                          type="text"
                          name="phone"
                          placeholder="Your phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <label htmlFor="phone">Contact Number</label>
                        <div className="icon-wrapper">
                          <i className="fas fa-phone-alt text-primary"></i>
                        </div>
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="col-md-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-light border-0 shadow-sm"
                          id="message"
                          name="message"
                          placeholder="Your message"
                          style={{ height: "160px" }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label htmlFor="message">
                          Message <span className="text-danger">*</span>
                        </label>
                        <div className="icon-wrapper textarea-icon">
                          <i className="fas fa-comment-alt text-primary"></i>
                        </div>
                      </div>
                    </div>

                    {/* Submit button */}
                    <div className="col-md-12 text-center mt-4">
                      <button
                        id="submitButton"
                        className="butn style-one fill px-5 py-3 rounded-pill"
                        type="submit"
                        disabled={loading}
                      >
                        <span className="d-flex align-items-center justify-content-center">
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                          <div
                            className="loader-spinner ms-2"
                            id="loaderSpinner"
                            style={{
                              display: loading ? "inline-block" : "none",
                            }}
                          ></div>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-1 position-absolute bottom-0 start-0 d-none d-lg-block">
          <svg
            width="250"
            height="250"
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity="0.1"
          >
            <circle cx="125" cy="125" r="125" fill="#5e5cc7" />
          </svg>
        </div>
        <div className="shape-2 position-absolute top-0 end-0 d-none d-lg-block">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity="0.1"
          >
            <circle cx="100" cy="100" r="100" fill="#5e5cc7" />
          </svg>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
