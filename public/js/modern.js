/**
 * Modern Geosentry Website JS Functions
 */

// Handle scroll-to-top button visibility
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("active");
      } else {
        scrollToTopBtn.classList.remove("active");
      }
    });

    // Smooth scroll to top on click
    scrollToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Initialize scroll animations if not on mobile
  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    initScrollAnimations();
  }

  // Add hover effect to feature boxes
  const featureBoxes = document.querySelectorAll(".feature-box");
  featureBoxes.forEach((box) => {
    box.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    box.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Initialize solutions flip cards for touch devices
  initSolutionsCards();

  // Add hover effects for modern solution boxes
  const solutionBoxes = document.querySelectorAll(".modern-solution-box");

  if (solutionBoxes.length) {
    solutionBoxes.forEach((box) => {
      // Add hover effect
      box.addEventListener("mouseenter", function () {
        // Elevate the card
        this.style.transform = "translateY(-10px)";
        this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";

        // Change text color to white on hover
        const title = this.querySelector("h3");
        const paragraph = this.querySelector("p");
        const link = this.querySelector("a");

        if (title) title.style.color = "white";
        if (paragraph) paragraph.style.color = "rgba(255, 255, 255, 0.8)";
        if (link) {
          link.style.color = "white";
          link.style.fontWeight = "bold";
        }

        // Show overlay
        const overlay = this.querySelector(".hover-overlay");
        if (overlay) overlay.style.opacity = "0.95";
      });

      // Remove hover effect
      box.addEventListener("mouseleave", function () {
        // Reset card elevation
        this.style.transform = "";
        this.style.boxShadow = "";

        // Reset text colors
        const title = this.querySelector("h3");
        const paragraph = this.querySelector("p");
        const link = this.querySelector("a");

        if (title) title.style.color = "";
        if (paragraph) paragraph.style.color = "";
        if (link) {
          link.style.color = "";
          link.style.fontWeight = "";
        }

        // Hide overlay
        const overlay = this.querySelector(".hover-overlay");
        if (overlay) overlay.style.opacity = "0";
      });
    });
  }
});

// Initialize Solutions cards for touch devices
function initSolutionsCards() {
  const solutionCards = document.querySelectorAll(".solution-card");

  if (!solutionCards.length) return;

  // For touch devices, add click event to flip cards
  if ("ontouchstart" in window || navigator.maxTouchPoints) {
    solutionCards.forEach((card) => {
      card.addEventListener("click", function () {
        const cardInner = this.querySelector(".card-inner");

        // Check if card is already flipped
        const isFlipped = cardInner.style.transform === "rotateY(180deg)";

        // Reset all cards first
        solutionCards.forEach((otherCard) => {
          const otherCardInner = otherCard.querySelector(".card-inner");
          otherCardInner.style.transform = "";
        });

        // Flip this card if it wasn't already flipped
        if (!isFlipped) {
          cardInner.style.transform = "rotateY(180deg)";
        }
      });
    });
  }

  // Add slight movement effect on mouse move for desktop
  if (!("ontouchstart" in window) && window.innerWidth > 991) {
    solutionCards.forEach((card) => {
      card.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element

        // Calculate rotation based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;

        // Apply subtle rotation effect when not flipped
        const cardInner = this.querySelector(".card-inner");
        if (cardInner.style.transform !== "rotateY(180deg)") {
          this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });

      card.addEventListener("mouseleave", function () {
        // Reset rotation when mouse leaves
        this.style.transform = "";
      });
    });
  }
}

// Initialize scroll animations
function initScrollAnimations() {
  const scrollElements = document.querySelectorAll(".scroll-animation");

  if (!scrollElements.length) return;

  // Initial check on page load
  checkScrollAnimations();

  // Check elements on scroll
  window.addEventListener("scroll", checkScrollAnimations);

  function checkScrollAnimations() {
    scrollElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("animate");
      }
    });
  }
}

// Add particle background effect to CTA section
document.addEventListener("DOMContentLoaded", function () {
  const ctaSection = document.querySelector(".modern-cta");

  if (ctaSection && window.particlesJS) {
    const particlesContainer = document.createElement("div");
    particlesContainer.id = "cta-particles";
    particlesContainer.style.position = "absolute";
    particlesContainer.style.top = "0";
    particlesContainer.style.left = "0";
    particlesContainer.style.width = "100%";
    particlesContainer.style.height = "100%";
    particlesContainer.style.zIndex = "0";

    ctaSection.prepend(particlesContainer);

    window.particlesJS("cta-particles", {
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
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
      },
      retina_detect: true,
    });
  }
});

// Mobile menu handling
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      mainNav.classList.toggle("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest(".main-nav") &&
        !event.target.closest(".menu-toggle")
      ) {
        menuToggle.classList.remove("active");
        mainNav.classList.remove("open");
      }
    });
  }
});
