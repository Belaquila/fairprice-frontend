import { useState, useEffect } from "react";
import CostList from "./CostList";
import { getAllCosts } from "../api/costApi";
import { Card } from "flowbite-react";

const ProductDetails = ({ product, onAddCost, onUpdateCost, onDeleteCost }) => {
  const [newCost, setNewCost] = useState({ costId: "", quantity: "", unit: "" });
  const [availableCosts, setAvailableCosts] = useState([]);
  const [productCostIds, setProductCostIds] = useState([]);

  useEffect(() => {
    // Update the state whenever the product's costs change
    setProductCostIds(product.costs.map(cost => cost.cost._id));
  }, [product.costs]);

  useEffect(() => {
    getAllCosts()
      .then((data) => {
        setAvailableCosts(data);
      })
      .catch((error) => console.error("Error fetching costs:", error));
  }, []);

  const filteredCosts = availableCosts.filter(cost => !productCostIds.includes(cost._id));

  const handleAddCost = () => {
    onAddCost(newCost);
    setNewCost({ costId: "", quantity: "", unit: "" });
  };

  return (
    <div className="p-8">

      <h1 className="text-2xl font-bold text-secondary">{product.name}</h1>
      <Card className="mb-10 mt-5">
        <p>Base Quantity: {product.base_quantity}</p>
        <p>Unit Total Cost: {product.unit_total_cost}</p>
        <p>Unit Price: {product.unit_price}</p>
      </Card>


  
        <h2 className="text-xl font-bold text-gray-800">Ingredients</h2>
        <Card className="mb-5 mt-5 p-4">
          <CostList
            costs={product.costs}
            onUpdate={onUpdateCost}
            onDelete={onDeleteCost}
          />
        </Card>

    
        <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg items-center mb-20 mt-10">
          
          <div className="">
            <select
              value={newCost.costId}
              onChange={(e) =>
                setNewCost((prev) => ({ ...prev, costId: e.target.value }))
              }
              className="input"
            >
              <option value="">Select Cost</option>
              {filteredCosts.map(cost => (
                <option key={cost._id} value={cost._id}>
                  {cost.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={newCost.quantity}
              onChange={(e) =>
                setNewCost((prev) => ({ ...prev, quantity: e.target.value }))
              }
              placeholder="Quantity"
              className="input"
            />
            <input
              type="text"
              value={newCost.unit}
              onChange={(e) =>
                setNewCost((prev) => ({ ...prev, unit: e.target.value }))
              }
              placeholder="Unit"
              className="input"
            />
            <button onClick={handleAddCost}>
              Add ingredient
            </button>
          </div>
        </Card>
      
    </div>
  );
};

export default ProductDetails;
