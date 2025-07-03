import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

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

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your message has been sent successfully.",
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
        text: "An error occurred while sending the email.",
      });
    }
  };

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
                    Get in touch to find the right solution for you
                  </h1>
                </div>
              </div>
              {/* end banner text */}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-grey">
        <div className="container">
          <div className="row mt-n4">
            <div className="col-lg-4 mt-4">
              <div
                className="card card-style07 py-2-8 px-1-6 bg-white wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="card-body">
                  <div className="title-box mb-4">
                    <i className="fas fa-comments"></i>
                    <div className="box-circle-large"></div>
                    <div className="box-circle-small"></div>
                  </div>
                  <h3 className="h5 mb-3">Let's Talk</h3>
                  <p className="mb-0 w-90 w-md-75 w-lg-100 mx-auto">
                    <strong className="font-weight-600">Phone:</strong> +91
                    91138-21395
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div
                className="card card-style07 py-2-8 px-1-6 bg-white wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="card-body">
                  <div className="title-box mb-4">
                    <i className="fas fa-envelope"></i>
                    <div className="box-circle-large"></div>
                    <div className="box-circle-small"></div>
                  </div>
                  <h3 className="h5 mb-3">E-mail Us</h3>
                  <p className="mb-0 w-90 w-md-75 w-lg-100 mx-auto">
                    support@geosentry.ai
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div
                className="card card-style07 py-2-8 px-1-6 bg-white wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="card-body">
                  <div className="title-box mb-4">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="box-circle-large"></div>
                    <div className="box-circle-small"></div>
                  </div>
                  <h3 className="h5 mb-3">Visit Our Office</h3>
                  <p className="mb-0 w-90 w-md-75 w-lg-100 mx-auto">
                    #15,3rd Cross Jabbar Block PG Halli Vyalikaval Extn
                    Bangalore North Bangalore Karnataka - 560003 India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 wow fadeIn">
              <div className="w-md-85 w-xl-65 text-center mx-auto mb-6 mb-lg-8">
                <h2 className="mb-4">Get in Touch</h2>
                <p className="mx-auto mb-0">
                  We are available 24/7 by e-mail and phone. You can also ask a
                  question about our services through our contact form.
                </p>
              </div>

              <div
                className="loader"
                style={{ display: loading ? "inline-block" : "none" }}
              ></div>

              {/* start form here */}
              <form id="emailForm" onSubmit={handleSubmit}>
                <div className="quform-elements">
                  <div className="row">
                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <label htmlFor="name">
                          Your Name <span className="quform-required">*</span>
                        </label>
                        <div className="quform-input">
                          <input
                            className="form-control"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name here"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <label htmlFor="email">
                          Your Email <span className="quform-required">*</span>
                        </label>
                        <div className="quform-input">
                          <input
                            className="form-control"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your email here"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <label htmlFor="subject">
                          Your Subject{" "}
                          <span className="quform-required">*</span>
                        </label>
                        <div className="quform-input">
                          <input
                            className="form-control"
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Your subject here"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <label htmlFor="phone">Contact Number</label>
                        <div className="quform-input">
                          <input
                            className="form-control"
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Begin Textarea element */}
                    <div className="col-md-12">
                      <div className="quform-element form-group">
                        <label htmlFor="message">
                          Message <span className="quform-required">*</span>
                        </label>
                        <div className="quform-input">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Tell us a few words"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Begin Submit button */}
                    <div className="col-md-12">
                      <button
                        id="submitButton"
                        className="butn style-one fill"
                        type="submit"
                        disabled={loading}
                      >
                        <span>Submit Comment</span>
                        <div
                          className="loader-spinner"
                          id="loaderSpinner"
                          style={{ display: loading ? "inline-block" : "none" }}
                        ></div>
                      </button>
                      <div className="quform-loading-wrap text-start">
                        <span className="quform-loading"></span>
                      </div>
                    </div>
                    {/* End Submit button */}
                  </div>
                </div>
              </form>
              {/* end form here */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
