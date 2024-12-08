import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduct from "./pages/ListProduct";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListProduct />}></Route>
        <Route path="/" element={<ListProduct />}>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="update-product" element={<UpdateProduct />} />
          <Route path="detail-product" element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
