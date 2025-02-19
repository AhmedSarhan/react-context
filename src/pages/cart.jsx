import React from "react";
import Products from "../assets/data/products.json";
import { ProductCard } from "../components/products/product-card";
import { useCart } from "../providers/cart-provider";

export const Cart = () => {
  const { cartProducts } = useCart();
  return (
    <div className="products-container">
      {cartProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
