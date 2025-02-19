import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Header } from "./components/header";
import { CartProvider } from "./providers/cart-provider";
import { Wishlist } from "./pages/wishlist";

function App() {
  return (
    <CartProvider>
      <Header />
      <div className="container">
        <h1>Context API in React</h1>

        <Routes>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;

/* 

1. Create a new Provider / use the cart provider
2. save the state in it  
3. update the wishlisted state of a product
4. reflect the correct state on the heart icon
5. prevent duplicate additions / remove or add 
6. Extra: use the useReducer (Redux Pattern)
*/
