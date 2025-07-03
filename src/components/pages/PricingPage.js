import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  useEffect(() => {
    document.title = "Geosentry: AI-Powered Geo Services with Transparent Pricing";
    window.scrollTo(0, 0);
  }, []);

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
                  <h1 className="text-white text-center service-header mb-1-6 mb-md-1-9">Flexible Pricing for Every Business</h1>
                </div>
              </div>
              {/* end banner text */}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-grey pricing-table">
        <div className="container">
          <div className="w-md-85 w-lg-65 w-xl-50 text-center mx-auto mb-6">
            <h2 className="mb-0">Plans & Pricing</h2>
          </div>

          {/* start pricing section */}
          <div className="row align-items-end mt-n4">
            <div className="col-lg-4 mt-4">
              <div className="card text-center border-color-light-black">
                <div className="card-header bg-light border-color-light-black p-4 p-lg-5">
                  <h4 className="h5">Free Tier</h4>
                </div>
                <div className="card-body pt-5 pb-0">
                  <ul className="list-unstyled p-0 m-0">
                    <li className="pb-2">10 Users Limit</li>
                    <li className="py-1">20 GeoFence Limit</li>
                    <li className="py-2">250000 Api Limit</li>
                    <li className="pb-2">360 GeoEvents Limit</li>
                    <li className="py-1">30 Subscription Days</li>
                    <li className="py-2">60 Location Frequency <span style={{fontSize: '12px'}}>(in Secs)</span></li>
                    <li className="pt-2">Email Support <span style={{fontSize: '12px'}}>(Mon - Fri, 9:00 AM to 6:00 PM )</span></li>
                  </ul>
                </div>
                <div className="card-footer border-0 bg-transparent p-5">
                  <a href="#!" className="butn grey d-block"><span>Purchase Now</span></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <div className="card text-center border-color-light-black">
                <div className="card-header bg-primary-solid border-color-light-black p-4 p-lg-5">
                  <h4 className="h5 text-white">Premium Tier</h4>
                </div>
                <div className="card-body pt-5 pb-0">
                  <ul className="list-unstyled p-0 m-0">
                    <li className="pb-2">100 Users Limit</li>
                    <li className="py-1">200 GeoFence Limit</li>
                    <li className="py-2">500000 Api Limit</li>
                    <li className="pb-2">3600 GeoEvents Limit</li>
                    <li className="py-1">90 Subscription Days</li>
                    <li className="py-2">30 Location Frequency <span style={{fontSize: '12px'}}>(in Secs)</span></li>
                    <li className="pt-2">Email & Call Support <span style={{fontSize: '12px'}}>(Mon - Fri, 9:00 AM to 6:00 PM )</span></li>
                  </ul>
                </div>
                <div className="card-footer border-0 bg-transparent p-5">
                  <a href="#!" className="butn style-one fill d-block"><span>Purchase Now</span></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <div className="card text-center border-color-light-black">
                <div className="card-header bg-light border-color-light-black p-4 p-lg-5">
                  <h4 className="h5">Diamond Tier</h4>
                </div>
                <div className="card-body pt-5 pb-0">
                  <ul className="list-unstyled p-0 m-0">
                    <li className="pb-2">500 Users Limit</li>
                    <li className="py-1">10000 GeoFence Limit</li>
                    <li className="py-2">2500000 Api Limit</li>
                    <li className="pb-2">36000 GeoEvents Limit</li>
                    <li className="py-1">180 Subscription Days</li>
                    <li className="py-2">30 Location Frequency <span style={{fontSize: '12px'}}>(in Secs)</span></li>
                    <li className="pt-2">24/7 Email & Call Support</li>
                  </ul>
                </div>
                <div className="card-footer border-0 bg-transparent p-5">
                  <a href="#!" className="butn grey d-block"><span>Purchase Now</span></a>
                </div>
              </div>
            </div>
          </div>
          {/* end pricing section */}
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="contact-sales overflow-visible">
        <div className="container z-index-9 position-relative">
          <div className="row justify-content-center wow fadeIn" data-wow-delay=".1s">
            <div className="col-lg-8 col-xl-6 text-center text-white">
              <h2 className="h1 mb-1-9 w-lg-80 mx-auto text-white">Need a tailored plan?</h2>
              <p>One size does not fit all! Reach out if you're looking to tweak our plans to fit your implementation. We can offer higher limits, or even a plan with no daily limits.</p>
              <Link to="/contact" className="butn style-two">CONTACT SALES</Link>
            </div>
          </div>
        </div>
        <img src="/img/content/subscribe2.png" className="position-absolute top-n15 left-3 left-xxl-2 d-none d-lg-block wow fadeInLeft" data-wow-delay=".2s" alt="Subscribe" />
        <img src="/img/content/subscribe3.png" className="position-absolute bottom-n10 right-5 right-xxl-5 z-index-3 d-none d-lg-block wow fadeInRight" data-wow-delay=".4s" alt="Subscribe" />
      </section>
    </main>
  );
};

export default PricingPage;