import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./products.module.css";
export const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <button
          className={styles.wishlistButton}
          onClick={() => setInWishlist(!inWishlist)}
        >
          {inWishlist ? (
            <FaHeart className={styles.heartIcon} />
          ) : (
            <FaRegHeart className={styles.heartIcon} />
          )}
        </button>
      </div>
      <h3 className={styles.name}>{product.name}</h3>
      <div className={styles.priceContainer}>
        {product.salePrice && (
          <p className={styles.sale}>${product.salePrice}</p>
        )}
        <p
          className={styles.price}
          style={{
            textDecoration: product.salePrice ? "line-through" : "none",
            color: product.salePrice ? "grey" : "auto",
          }}
        >
          ${product.price}
        </p>
      </div>
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${inCart ? styles.inCart : ""}`}
          onClick={() => setInCart(!inCart)}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
