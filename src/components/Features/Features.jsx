import React from "react";

function Features() {
  return (
    <section className="features-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 p-0 feature">
            <div className="feature-inner">
              <div className="feature-icon">
                <img src="/img/icons/1.png" alt="#" />
              </div>
              <h2>Fast Secure Payments</h2>
            </div>
          </div>
          <div className="col-md-4 p-0 feature">
            <div className="feature-inner">
              <div className="feature-icon">
                <img src="/img/icons/2.png" alt="#" />
              </div>
              <h2>Premium Products</h2>
            </div>
          </div>
          <div className="col-md-4 p-0 feature">
            <div className="feature-inner">
              <div className="feature-icon">
                <img src="/img/icons/3.png" alt="#" />
              </div>
              <h2>Free & fast Delivery</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
