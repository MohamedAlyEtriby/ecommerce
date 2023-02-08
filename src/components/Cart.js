import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { remove, quancount } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./Cart.css";
const Cart = ({ arrr }) => {
  let total = 0;
  const { cartt, ara, addquan1 } = useSelector((store) => store.cart);
  const x = useRef([ara]);
  console.log(x);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        {cartt.map((item) => {
          return (
            <div className="row">
              <div className="col-11 col-md-6  Mar">
                <img src={item.image} alt="" />
              </div>
              <div className="col-11 col-md-6  Mar info ">
                <div>
                  <h2>{item.category}</h2>
                  <h1 className="title">{item.title.substring(0, 20)}</h1>
                  <h5 className="">
                    Quantity:{" "}
                    <input
                      type="number"
                      onChange={(e) =>
                        dispatch(
                          quancount({ tar: e.target.value, ite: item.id })
                        )
                      }
                      value={ara[item.id]}
                    />
                  </h5>
                  <h3 className="price">Price: ${item.price * ara[item.id]}</h3>
                  <h3 className="rating">Rating: {item.rating.rate}</h3>
                  <h3>Brief Description:</h3>
                  <h4 className="description">
                    {item.description.substring(0, 90)}
                  </h4>
                  <button
                    onClick={() => dispatch(remove(item.id))}
                    className="btn btn-primary"
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          {cartt.map((item) => {
            <div>
              {" "}
              Total Price: {(total = total + item.price * ara[item.id])}
            </div>;
          })}
        </div>
        <div className="total ">
          <div className="d-flex justify-content-between">
            <h2>SubTotal:</h2>
            <h2>${Math.round(total)}</h2>
          </div>
          <Link to="/" className="btn btn-danger">
            Return Back to Proucts{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
