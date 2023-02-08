import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const { cartquan } = useSelector((store) => store.cart);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          position: "fixed",
          top: "0",
          backgroundColor: "lightgray",
          zIndex: "99",
          width: "100%",
        }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            Collection
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link
                to="/cart"
                className="btn btn-outline-dark"
                style={{ marginRight: "10px", fontSize: "18px" }}
              >
                <i className="fa-regular fa-cart-shopping"></i> Cart (
                <span style={{ color: "red", fontWeight: "600" }}>
                  {cartquan}
                </span>
                )
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
