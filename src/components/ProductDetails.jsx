import { useState, useEffect } from "react";
import CostList from "./CostList";
import { getAllCosts } from "../api/costApi";

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
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>Base Quantity: {product.base_quantity}</p>
      <p>Unit Total Cost: {product.unit_total_cost}</p>
      <p>Unit Price: {product.unit_price}</p>

      <div className="mt-4">
        <h2 className="text-xl font-bold">Costs</h2>
        <CostList
          costs={product.costs}
          onUpdate={onUpdateCost}
          onDelete={onDeleteCost}
        />
        <div className="mt-4">
          <select
            value={newCost.costId}
            onChange={(e) =>
              setNewCost((prev) => ({ ...prev, costId: e.target.value }))
            }
            className="border p-1 rounded mr-2"
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
            className="border p-1 rounded mr-2"
          />
          <input
            type="text"
            value={newCost.unit}
            onChange={(e) =>
              setNewCost((prev) => ({ ...prev, unit: e.target.value }))
            }
            placeholder="Unit"
            className="border p-1 rounded mr-2"
          />
          <button onClick={handleAddCost} className="bg-blue-500 text-white p-2 rounded">
            Add Cost
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
