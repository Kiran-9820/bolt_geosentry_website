import React, { useEffect } from "react";
// Import Homepage Sections
import Banner from "../sections/home/Banner";
import Solutions from "../sections/home/Solutions";
import Services from "../sections/home/Services";
import Technology from "../sections/home/Technology";
import SdkApi from "../sections/home/SdkApi";
import Testimonials from "../sections/home/Testimonials";
import CallToAction from "../sections/home/CallToAction";

const HomePage = () => {
  useEffect(() => {
    document.title = "AI Fleet Management and Geo Tracking Service | Geosentry";

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add scroll animation class to elements
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-animation");

      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger scroll handler once on initial load
    setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="modern-main">
      <Banner />
      <div className="section-container">
        <Solutions />
      </div>
      <div className="section-container alternate-bg">
        <Services />
      </div>

      {/* Technology section with modern design */}
      <div className="section-container tech-modern-container">
        <div className="scroll-animation fade-in-up">
          <Technology />
        </div>
      </div>

      {/* SDK & API section with modern design */}
      <div className="section-container sdk-modern-container position-relative overflow-hidden">
        <div className="modern-background-overlay"></div>
        <div className="scroll-animation fade-in-left">
          <SdkApi />
        </div>
      </div>

      {/* Testimonials section with modern design */}
      <div className="section-container testimonial-modern-container">
        <div className="scroll-animation fade-in-up">
          <Testimonials />
        </div>
      </div>

      <div className="section-container cta-container">
        <CallToAction />
      </div>
    </main>
  );
};

export default HomePage;
