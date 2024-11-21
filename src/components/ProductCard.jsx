import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="cursor-pointer"
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>Total Cost: ${product.unit_total_cost.toFixed(2)}</p>
      <p>Price: ${product.unit_price.toFixed(2)}</p>
      <p>Costs Count: {product.costs.length}</p>
    </Card>
  );
};

export default ProductCard;