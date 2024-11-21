import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("authToken");

export const getAllCosts = () =>
  axios
    .get(`${VITE_API_URL}/api/costs`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching costs:", error);
      throw error;
    });
