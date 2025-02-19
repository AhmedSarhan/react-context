import { createContext, useContext, useState } from "react";
import Products from "../assets/data/products.json";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const [cartProductsIDs, setCartProductsIDs] = useState([]);

  const cartProducts = cartProductsIDs.map((productId) => {
    return products.find((product) => product.id === productId);
  });
  const addOrRemoveProductToCart = (productId) => {
    // const inCart = cartProductsIDs.findIndex((id) => id === productId);
    // if (inCart !== -1) {
    //   // remove from cart
    //   return setCartProductsIDs((prev) =>
    //     prev.filter((id) => id !== productId)
    //   );
    // }
    // // add to cart
    // return setCartProductsIDs((prevIds) => [...prevIds, productId]);

    setCartProductsIDs((prev) => {
      const inCart = prev.findIndex((id) => id === productId);
      if (inCart === -1) {
        return [...prev, productId];
      }
      return prev.filter((id) => id !== productId);
    });
  };

  const contextValue = {
    products,
    cartProducts,
    cartProductsIDs,
    addOrRemoveProductToCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Cart context can't be used outside CartProvider");
  }
  return context;
};
