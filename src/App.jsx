// App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Products, Contact, Cart } from "./pages/PageCollections";

function App() {
  return (
    <BrowserRouter>
      {/* routing without full page-reload */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produkter" element={<Products />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
