import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ productItem }) => {
  return (
    <>
      <Link
        className="link"
        to={`/Product/Details/${productItem.id}`}
        state={{ item: productItem }}
      >
        <div className="card-container">
          <div className="product-img">
            <img src={productItem.image} alt="img" />
          </div>
          <div className="product-desc">
            <h3>{productItem.title}</h3>
            <p>{productItem.description}</p>
            <h4>₹ {productItem.price}</h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
