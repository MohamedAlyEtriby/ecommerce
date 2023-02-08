import React from "react";
import Products from "../Products";

function Home() {
  return (
    <div className="hero" style={{margin:"70px 0"}}>
      <div className="card text-bg-dark border-0">
        <img
          src="https://img.freepik.com/premium-photo/black-friday-sale-banner-concept-design-shopping-bag-black-background-with-copy-space-3d-render_46250-3239.jpg"
          className="card-img"
          alt="baclground"
          height="600px"
        />
        <div className="card-img-overlay">
          <h1 className="card-title display-3 fw-bolder">New season arrival</h1>
          <p className="card-text">CHECKOUT ALL Trends</p>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
