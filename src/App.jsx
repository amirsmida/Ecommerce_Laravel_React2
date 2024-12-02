
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Acceuil from "./pages/Acceuil";
import Footer from "./pages/Footer";
import Shop from "./pages/Shop";
import { CartProvider } from "use-shopping-cart";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />

          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
