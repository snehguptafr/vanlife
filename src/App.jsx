import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar">
          <Link to="/"><img className="logo" src="./assets/logo.png" alt="Vanlife logo" /></Link>
          <span className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </span>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  );
}
