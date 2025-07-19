import React, { useEffect, useState } from "react";
import "../../../assets/css/demo-modal.css"; // Keep for styles that might be needed in the Banner
import DemoRequestModal from "../../layout/DemoRequestModal";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Initialize particles.js if it exists in the global scope
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: ["#0063FF", "#11f7e5", "#32CD32"],
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#11f7e5",
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#11f7e5",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            push: {
              particles_nb: 3,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div className="modern-banner">
      <div id="particles-js" className="particles-container"></div>

      <div className="banner-content container py-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12 text-content">
            <h1 className="hero-title">
              Your Ultimate GPS Tracking Solution Powered by{" "}
              <span className="highlight">AI</span> on Google Cloud Platform
            </h1>

            <div className="hero-description">
              <p>
                Reform your applications with our SDK and API services for GPS
                Tracking, Optimal Routing, and Geofencing capabilities
              </p>
            </div>

            <div className="banner-cta">
              <a
                href="/service/fleet-management"
                className="cta-button secondary"
              >
                <span>Explore Services</span>
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="cta-button primary"
              >
                <span>Get Demo</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="banner-features">
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>GPS Tracking</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Optimal Routing</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Geofencing</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 image-content mt-2 mt-lg-0">
            <div className="banner-image">
              <img
                src="/img/banner/routing-and-navigation.svg"
                alt="Geosentry Dashboard"
                // className="dashboard-image img-fluid"
              />
              {/* <div className="image-backdrop"></div> */}
              <div className="floating-element elem1"></div>
              <div className="floating-element elem2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-shape">
        <img src="/img/banner/bg-bottom-shape.png" alt="Banner Shape" />
      </div>

      <DemoRequestModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Banner;
