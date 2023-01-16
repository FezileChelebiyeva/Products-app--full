import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../pages/add-product";
import DetailsPage from "../pages/deails-card";
import NotFound from "../pages/not-found";
import WishlistProducts from "../pages/product-wishlist";
import Products from "../pages/products";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/wishlist-products" element={<WishlistProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
