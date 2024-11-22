import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";

const ProductListPage = () => {
  const navigate = useNavigate();

  const handleCreateProduct = () => {
    navigate("/products/create");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Product List</h1>
      <button onClick={handleCreateProduct}
      className="absolute top-0 right-0 mt-4 mr-4"
      >
        Create product
      </button>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
