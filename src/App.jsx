import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <img src="./assets/logo.png" alt="Vanlife logo" />
          <span>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </span>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
