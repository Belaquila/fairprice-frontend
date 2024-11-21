import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VITE_API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('authToken');

const AddProduct = () => {
    const [name, setName] = useState('');
    const [baseQuantity, setBaseQuantity] = useState('');
    const [costs, setCosts] = useState([]);
    const [unitTotalCost, setUnitTotalCost] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${VITE_API_URL}/api/products`, {
            name,
            base_quantity: baseQuantity,
            costs: costs.length ? costs : [], // Ensure costs is always an array
            unit_total_cost: unitTotalCost,
            unit_price: unitPrice,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            alert('Product added successfully!');
            console.log(response.data) // how to get ID of the product just created.
            setName('');
            setBaseQuantity('');
            setCosts([]);
            setUnitTotalCost('');
            setUnitPrice('');
            navigate('/products');
            
        })
        .catch(err => {
            alert('Failed to add product');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="baseQuantity">Base Quantity:</label>
                <input
                    type="text"
                    id="baseQuantity"
                    value={baseQuantity}
                    onChange={(e) => setBaseQuantity(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="unitTotalCost">Unit Total Cost:</label>
                <input
                    type="text"
                    id="unitTotalCost"
                    value={unitTotalCost}
                    onChange={(e) => setUnitTotalCost(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="unitPrice">Unit Price:</label>
                <input
                    type="text"
                    id="unitPrice"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
