import React from 'react'
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

function Header() {
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 text-center text-lg-left">
              <Link to={"/"} className="site-logo">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="col-xl-6 col-lg-5">
              <form className="header-search-form">
                <input type="text" placeholder="Search on divisima ...." />
                <button>
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="user-panel">
                <div className="up-item">
                  <i className="flaticon-profile"></i>
                  <a href="fake">Sign</a> In or <a href="fake">Create Account</a>
                </div>
                <div className="up-item">
                  <div className="shopping-card">
                    <i className="flaticon-bag"></i>
                    <span>0</span>
                  </div>
                  <a href="fake">Shopping Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-navbar">
        <div className="container">
          <ul className="main-menu">
            <li>
              <a href="fake">Home</a>
            </li>
            <li>
              <a href="fake">Women</a>
            </li>
            <li>
              <a href="fake">Men</a>
            </li>
            <li>
              <a href="fake">
                Jewelry
                <span className="new">New</span>
              </a>
            </li>
            <li>
              <a href="fake">Shoes</a>
              <ul className="sub-menu">
                <li>
                  <a href="fake">Sneakers</a>
                </li>
                <li>
                  <a href="fake">Sandals</a>
                </li>
                <li>
                  <a href="fake">Formal Shoes</a>
                </li>
                <li>
                  <a href="fake">Boots</a>
                </li>
                <li>
                  <a href="fake">Flip Flops</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="fake">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="./product.html">Product Page</a>
                </li>
                <li>
                  <a href="./category.html">Category Page</a>
                </li>
                <li>
                  <a href="./cart.html">Cart Page</a>
                </li>
                <li>
                  <a href="./checkout.html">Checkout Page</a>
                </li>
                <li>
                  <a href="./contact.html">Contact Page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="fake">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header
