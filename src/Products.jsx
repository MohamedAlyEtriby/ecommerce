import React from "react";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Addtocart, addquan1 } from "./features/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { motion } from "framer-motion";
import "./Product.css";
let quan = [];
function Products() {
  const { quantity } = useSelector((store) => store.cart);
  const [addedcart, setadded] = useState(false);
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const [filter1, setfilter] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const getproduct = async () => {
      setloading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const dataa = await res.json();
      setdata(dataa);
      setfilter(dataa);
      if (data) {
        setloading(false);
      }
      for (let i = 0; i <= dataa.length; i++) {
        quan[i] = 0;
      }
    };
    getproduct();
  }, []);

  const Load = () => {
    return (
      <h2>Loading..</h2>
    );
  };
  const setcat = (cat) => {
    const updatedata = filter1.filter((item) => item.category === cat);
    setdata(updatedata);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center disp ">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setdata(filter1);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setcat("men's clothing");
            }}
          >
            Men's
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setcat("women's clothing");
            }}
          >
            {" "}
            Woman's
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setcat("jewelery");
            }}
          >
            {" "}
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setcat("electronics");
            }}
          >
            {" "}
            Electronics
          </button>
        </div>
        {data.map((item) => {
          return (
            <>
           
              <div key={item.id} className="col-md-3 col-sm-6 mt-5">
                <div className="card h-100 text-center">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="..."
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 12)}
                    </h5>
                    <p className="card-text fw-bold">${item.price}</p>
                    <button
                      onClick={() => {
                        dispatch(Addtocart(item));
                        dispatch(addquan1(item.id));
                        setadded(true);
                        setTimeout(() => {
                          setadded((pre) => (pre = false));
                        }, 500);
                      }}
                      className="btn btn-outline-dark"
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div className="container my-5 py-5">
      {addedcart && (
        <div className="addedcart">
          <CheckCircleOutlineIcon className="green" />
          Item Cart Added
        </div>
      )}
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest products</h1>
          <hr />
        </div>
        <div className="row">{loading ? <Load /> : <ShowProducts />}</div>
      </div>
    </div>
  );
}

export default Products;
