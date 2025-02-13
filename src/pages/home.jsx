import React from "react";
import styles from "./page.module.css";
import Products from "../assets/data/products.json";
import { ProductCard } from "./../components/products/product-card";
export const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Context API in React</h1>
      <h3>Products Page</h3>
      <div className={styles["products-container"]}>
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
