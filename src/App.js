import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Page Components
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import PricingPage from "./components/pages/PricingPage";
import ContactPage from "./components/pages/ContactPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import VideoPage from "./components/pages/VideoPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import BlogPage from "./components/pages/BlogPage";
import NewsPage from "./components/pages/NewsPage";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
