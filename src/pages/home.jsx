import React from "react";
import styles from "./page.module.css";
import { ProductCard } from "./../components/products/product-card";
import { useCart } from "../providers/cart-provider";
export const Home = () => {
  const { products } = useCart();
  return (
    <div>
      <h3>Products Page</h3>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
