import React, { useEffect, useState } from "react";

const Testimonials = () => {
  // Testimonials data stored in a JSON array
  const [testimonials] = useState([
    {
      id: 1,
      text: "Geosentry transformed our GPS needs at S.D. Automobiles. Affordable, innovative, and supported, they made our transition seamless. With a dedicated Key Account Manager ensures prompt service. Recently, their advanced tracking tech helped us recover a stolen vehicle swiftly. Highly recommend.",
      author: "SD Automobiles",
      position: "Fleet Manager",
      avatar: "img/avatar/avatar-09.jpg",
    },
    {
      id: 2,
      text: "Geosentry's tracking solution has revolutionized our car rental operations. The real-time monitoring and reliable alerts have significantly reduced vehicle misuse and improved our fleet efficiency. Their customer service is top-notch and always responsive.",
      author: "DPS Silchar",
      position: "Operations Director",
      avatar: "img/avatar/avatar-10.jpg",
    },
    {
      id: 3,
      text: "Switching to Geosentry is a game-changer for Drif Carz. Affordable, innovative, and backed by top-notch support, they've made our GPS transition seamless. Having a dedicated Key Account Manager ensures our needs are met promptly. Highly recommend!",
      author: "DRIF CARZ",
      position: "CEO",
      avatar: "img/avatar/avatar-07.jpg",
    },
  ]);

  // Initialize owl carousel when component mounts
  useEffect(() => {
    // Check if jQuery and owl carousel are available
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery(".testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        dots: true,
        margin: 30,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
        },
      });
    }
  }, []);

  return (
    <section className="modern-testimonial-section py-5">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <h2 className="section-title mb-3 h2 fw-bold text-dark">
            What <span className="text-gradient">Our Clients</span> Say
          </h2>
          <p className="section-description">
            Real feedback from businesses trusting Geosentry
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="testimonial-container position-relative">
              <div className="testimonial-slider owl-carousel owl-theme">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-author">
                        <div className="author-avatar">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                          />
                        </div>
                        <div className="author-info">
                          <h5 className="author-name">{testimonial.author}</h5>
                          <p className="author-position">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
