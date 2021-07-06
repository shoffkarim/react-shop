import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs() {
  return (
    <div className="page-top-info">
      <div className="container">
        <h4>Category PAge</h4>
        <div className="site-pagination">
          <Link to={"/"}>Home</Link> /<Link>Shop</Link>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
