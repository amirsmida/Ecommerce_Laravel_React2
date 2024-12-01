import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Acceuil from "./pages/Acceuil";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Acceuil />} />
          {/*   <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
