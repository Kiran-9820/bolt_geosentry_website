import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Page Components
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import PricingPage from "./components/pages/PricingPage";
import ContactPage from "./components/pages/ContactPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import VideoPage from "./components/pages/VideoPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import BlogPage from "./components/pages/BlogPage";
import NewsPage from "./components/pages/NewsPage";

// Service Pages
import FleetManagementPage from "./components/pages/services/FleetManagementPage";
import GPSTrackingPage from "./components/pages/services/GPSTrackingPage";
import GeofencingPage from "./components/pages/services/GeofencingPage";
import ApiSdkPage from "./components/pages/services/ApiSdkPage";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/service" element={<ServicesPage />} /> */}
          <Route
            path="/service/fleet-management"
            element={<FleetManagementPage />}
          />
          <Route path="/service/gps-tracking" element={<GPSTrackingPage />} />
          <Route path="/service/geofencing" element={<GeofencingPage />} />
          <Route path="/service/api-sdk" element={<ApiSdkPage />} />
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
