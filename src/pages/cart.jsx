import React from "react";
import Products from "../assets/data/products.json";
import { ProductCard } from "../components/products/product-card";

export const Cart = () => {
  return (
    <div className="products-container">
      {Products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
