import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEcomContext } from "../context/EcomContext";

const ProductDetails = (props) => {
  const location = useLocation();
  const { addToCart } = useEcomContext();
  const item = location.state.item;
  return (
    <>
      <div className="Details-container">
        <div className="Details-img">
          <img src={item.image} alt="img" />
        </div>
        <div className="Details-flex">
          <div className="Details-text">
            <h2>{item.title}</h2>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <h3>₹{item.price}</h3>
          </div>
          <Link to="/Cart">
            <button
              className="addToCart-btn"
              onClick={() => {
                addToCart(item);
              }}
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
