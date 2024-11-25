import { Card, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { deleteProductById } from "../api/productApi";

const ProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteProductById(product._id)
      .then(() => {
        if (onDelete) {
          onDelete(product._id); // allow parent component to update UI
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <Card className="custom-card cursor-pointer">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>Total Cost: ${product.unit_total_cost.toFixed(2)}</p>
      <p>Price: ${product.unit_price.toFixed(2)}</p>
      <p>Number of ingredients: {product.costs.length}</p>
      <div className="flex space-x-2">
        <Button onClick={() => navigate(`/products/${product._id}`)}>Details</Button>
        <Button color="failure" onClick={handleDelete}>Delete</Button>
      </div>
    </Card>
  );
};

export default ProductCard;