import React from "react";

function Banner() {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner set-bg" data-setbg="img/banner-bg.jpg">
          <div className="tag-new">NEW</div>
          <span>New Arrivals</span>
          <h2>STRIPED SHIRTS</h2>
          <a href="fake" className="site-btn">
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
