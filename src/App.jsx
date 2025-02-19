import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Header } from "./components/header";
import { CartProvider } from "./providers/cart-provider";

function App() {
  return (
    <CartProvider>
      <Header />
      <div className="container">
        <h1>Context API in React</h1>

        <Routes>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
