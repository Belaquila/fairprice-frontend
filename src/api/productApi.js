import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("authToken");

export const getProductById = (id) =>
  axios
    .get(`${VITE_API_URL}/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);

export const addCostToProduct = (productId, costData) =>
  axios
    .post(`${VITE_API_URL}/api/products/${productId}/costs`, costData, {
      headers: { Authorization: `Bearer ${token}` },
    }
    )
    .then((response) => response.data);

export const deleteCostFromProduct = (productId, costId) =>
  axios
    .delete(`${VITE_API_URL}/api/products/${productId}/costs/${costId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);

export const updateCostInProduct = (productId, costId, costData) =>
  axios
    .put(`${VITE_API_URL}/api/products/${productId}/costs/${costId}`, costData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
