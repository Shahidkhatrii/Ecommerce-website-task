import React from "react";
import { productItems } from "../assets/Data/ProductData";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <>
      <div className="Product-list-container">
        <h2 className="Product-list-heading">
          {productItems.length ? "All Products" : "No Available Products"}
        </h2>

        <div className="Produst-list">
          {productItems.map((item) => {
            return <ProductCard key={item.id} productItem={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
