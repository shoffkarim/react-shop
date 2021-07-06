/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-logo text-center">
          <Link to={"/"}>
            <img src="/img/logo-light.png" alt="" />
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget about-widget">
              <h2>About</h2>
              <p>
                Donec vitae purus nunc. Morbi faucibus erat sit amet congue
                mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis
                ut. Integer ac sem.
              </p>
              <img src="/img/cards.png" alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget about-widget">
              <h2>Questions</h2>
              <ul>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Track Orders</Link>
                </li>
                <li>
                  <Link>Returns</Link>
                </li>
                <li>
                  <Link>Jobs</Link>
                </li>
                <li>
                  <Link>Shipping</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link>Partners</Link>
                </li>
                <li>
                  <Link>Bloggers</Link>
                </li>
                <li>
                  <Link>Support</Link>
                </li>
                <li>
                  <Link>Terms of Use</Link>
                </li>
                <li>
                  <Link>Press</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget about-widget">
              <h2>Questions</h2>
              <div className="fw-latest-post-widget">
                <div className="lp-item">
                  <div
                    className="lp-thumb set-bg"
                    // style="background:url(/img/blog-thumbs/1.jpg)"
                    >
                    </div>
                  <div className="lp-content">
                    <h6>what shoes to wear</h6>
                    <span>Oct 21, 2018</span>
                    <Link className="readmore">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="lp-item">
                  <div
                    className="lp-thumb set-bg"
                    // style="background:url(/img/blog-thumbs/2.jpg)"
                  ></div>
                  <div className="lp-content">
                    <h6>trends this year</h6>
                    <span>Oct 21, 2018</span>
                    <Link className="readmore">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget contact-widget">
              <h2>Questions</h2>
              <div className="con-info">
                <span>C.</span>
                <p>Your Company Ltd </p>
              </div>
              <div className="con-info">
                <span>B.</span>
                <p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68 </p>
              </div>
              <div className="con-info">
                <span>T.</span>
                <p>+53 345 7953 32453</p>
              </div>
              <div className="con-info">
                <span>E.</span>
                <p>office@youremail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links-warp">
        <div className="container">
          <div className="social-links">
            <Link className="instagram">
              <i className="fa fa-instagram"></i>
              <span>instagram</span>
            </Link>
            <Link className="google-plus">
              <i className="fa fa-google-plus"></i>
              <span>g+plus</span>
            </Link>
            <Link className="pinterest">
              <i className="fa fa-pinterest"></i>
              <span>pinterest</span>
            </Link>
            <Link className="facebook">
              <i className="fa fa-facebook"></i>
              <span>facebook</span>
            </Link>
            <Link className="twitter">
              <i className="fa fa-twitter"></i>
              <span>twitter</span>
            </Link>
            <Link className="youtube">
              <i className="fa fa-youtube"></i>
              <span>youtube</span>
            </Link>
            <Link className="tumblr">
              <i className="fa fa-tumblr-square"></i>
              <span>tumblr</span>
            </Link>
          </div>

          <p className="text-white text-center mt-5">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <Link>Colorlib</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
