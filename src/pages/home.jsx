import React from "react";
import styles from "./page.module.css";
import { ProductCard } from "./../components/products/product-card";
export const Home = () => {
  const { products } = useCart();
  return (
    <div>
      <h3>Products Page</h3>
      <div className="products-container">
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
