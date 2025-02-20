import React from "react";
import Products from "../assets/data/products.json";
import { ProductCard } from "../components/products/product-card";
import { useCart } from "../providers/cart-provider";

export const Wishlist = () => {
  const { wishListProducts } = useCart();
  return (
    <div>
      <h3>Wishlist Page</h3>
      <div className="products-container">
        {wishListProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
