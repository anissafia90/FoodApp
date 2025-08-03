import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyRecipes from "./components/MyRecipes";
import MyFavRecipes from "./components/MyFavRecipes";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./pages/EditRecipe";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/myRecipes" element={<MyRecipes />} />
          <Route path="/myFavRecipes" element={<MyFavRecipes />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/EditRecipe/:id" element={<EditRecipe />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
