import React, { useState } from "react";
import Swal from "sweetalert2";
import "../../assets/css/demo-modal.css";

const DemoRequestModal = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
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
      setShowModal(false);

      // Show success message with styling that matches the screenshot exactly
      Swal.fire({
        icon: "success",
        title: "Success",
        html: "Your demo request has been sent successfully.<br>Our team will contact you shortly!",
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
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setLoading(false);

      // Show error message with consistent styling
      Swal.fire({
        icon: "error",
        title: "Error",
        html: "An error occurred while sending your request.<br>Please try again later.",
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

  if (!showModal) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}
    >
      <div className="modal-container">
        <div className="modal-content">
          {/* Enhanced header with gradient title effect */}
          <div className="modal-header">
            <h4>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #d9edff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                Schedule Your Personalized Demo
              </span>
            </h4>
            <button
              onClick={() => setShowModal(false)}
              className="modal-close-button"
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Updated gradient form body */}
          <div className="modal-body">
            <p
              className="modal-intro-text"
              style={{
                background: "linear-gradient(135deg, #292dc2 0%, #5355e8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "500",
              }}
            >
              Experience the power of Geosentry's AI-driven GPS tracking
              solutions. Fill out the form below and our team will get back to
              you shortly.
            </p>

            <form id="demoRequestForm" onSubmit={handleSubmit}>
              <div className="form-row">
                {/* Updated name field with gradient style */}
                <div className="form-group">
                  <input
                    className="neumorphic-input"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="name" className="input-label required-field">
                    Full Name
                  </label>
                  <i className="fas fa-user input-icon"></i>
                </div>

                {/* Email field */}
                <div className="form-group">
                  <input
                    className="neumorphic-input"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email" className="input-label required-field">
                    Email Address
                  </label>
                  <i className="fas fa-envelope input-icon"></i>
                </div>
              </div>

              <div className="form-row">
                {/* Company field */}
                <div className="form-group">
                  <input
                    className="neumorphic-input"
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="company"
                    className="input-label required-field"
                  >
                    Company Name
                  </label>
                  <i className="fas fa-building input-icon"></i>
                </div>

                {/* Phone field */}
                <div className="form-group">
                  <input
                    className="neumorphic-input"
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone" className="input-label">
                    Phone Number
                  </label>
                  <i className="fas fa-phone-alt input-icon"></i>
                </div>
              </div>

              {/* Message field */}
              <div className="form-group">
                <textarea
                  className="neumorphic-textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message" className="input-label">
                  Tell us a few words
                </label>
                <i className="fas fa-comment input-icon"></i>
              </div>

              {/* Enhanced gradient submit button with animation */}
              <div className="demo-submit-wrapper">
                <button
                  type="submit"
                  className="neumorphic-button"
                  disabled={loading}
                >
                  <div className="button-content">
                    {loading ? "Processing..." : "Request Demo"}
                    {loading ? (
                      <div
                        className="spinner-border spinner-border-sm spinner-loader"
                        role="status"
                      ></div>
                    ) : (
                      <i className="fas fa-paper-plane"></i>
                    )}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoRequestModal;
