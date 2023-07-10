import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import "./App.css";
import Logo from "./assets/logo.png"

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar">
          <Link to="/"><img className="logo" src={Logo} alt="Vanlife logo" /></Link>
          <span className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </span>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  );
}
