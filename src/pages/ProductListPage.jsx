import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";

const ProductListPage = () => {
  const navigate = useNavigate();

  const handleCreateProduct = () => {
    navigate("/products/create");
  };

  return (
    <div className="relative p-4">
      <div className="flex justify-end mb-6">
        <button
          onClick={handleCreateProduct}
          className="bg-[var(--secondary-color)] text-white"
        >
          Create Product
        </button>
      </div>
      <h1 className="text-2xl font-bold text-center mb-4">Product List</h1>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
