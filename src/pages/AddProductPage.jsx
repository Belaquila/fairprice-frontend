import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddProduct from '../components/AddProduct';

const AddProductPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/products');
    };


    return (
        <div>
            <h1>Add New Product</h1>
            <button onClick={handleBack} className="mb-4 p-2 bg-gray-500 text-white rounded">
                Back
            </button>
            <AddProduct />
        </div>
    );
};

export default AddProductPage;