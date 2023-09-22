import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ items }) => {
  return (
    <div className="Product-list-container">
      <h2 className="Product-list-heading">
        {items[0]
          ? `${items[0].category} - ${items[0].subCategory}`
          : "No Available Items"}
      </h2>
      <div className="Produst-list">
        {items.map((item) => {
          return <ProductCard key={item.id} productItem={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
