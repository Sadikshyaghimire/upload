import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Products/ProductDetail";
import Prodcuts from "./pages/Products/Products";
import { CartProvider } from "./context/cart";


function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartProvider>
      <div className="App">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Prodcuts />} />
          <Route
            path="/products/:id"
            element={<ProductDetail/ >}
          />
          <Route path="/shop" element={<div>Shop</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
