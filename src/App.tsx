import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  // No tipo do state hook pai, define o tipo dos valores que serão armazenados
  const [mode, setMode] = useState<string>("light");

  return (
    <div className={mode === "light" ? "container" : "dark container"}>
      <BrowserRouter>
        <Navbar mode={mode} setMode={setMode}></Navbar>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/men" element={<Category category="men" />} />
          <Route path="/women" element={<Category category="women" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart mode={mode} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
