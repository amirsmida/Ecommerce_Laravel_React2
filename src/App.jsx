
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Acceuil from "./pages/Acceuil";
import Footer from "./pages/Footer";
import Shop from "./pages/Shop";
import Login from "./pages/login";
import { CartProvider } from "use-shopping-cart";
import Cart from "./pages/Cart";
import Register from "./pages/Register";

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
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
