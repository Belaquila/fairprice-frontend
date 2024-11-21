import { useState, useEffect } from "react";
import CostList from "./CostList";
import { getAllCosts } from "../api/costApi";

const ProductDetails = ({ product, onAddCost, onUpdateCost, onDeleteCost }) => {
  const [newCost, setNewCost] = useState({ costId: "", quantity: "", unit: "" });
  const [availableCosts, setAvailableCosts] = useState([]);

  useEffect(() => {
    getAllCosts()
      .then((data) => setAvailableCosts(data))
      .catch((error) => console.error("Error fetching costs:", error));
  }, []);

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
            {availableCosts.map((cost) => (
              <option key={cost._id} value={cost._id}>
                {cost.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Quantity"
            value={newCost.quantity}
            onChange={(e) =>
              setNewCost((prev) => ({ ...prev, quantity: e.target.value }))
            }
            className="border p-1 rounded mr-2"
          />
          <input
            type="text"
            placeholder="Unit"
            value={newCost.unit}
            onChange={(e) =>
              setNewCost((prev) => ({ ...prev, unit: e.target.value }))
            }
            className="border p-1 rounded mr-2"
          />
          <button onClick={handleAddCost} className="text-green-500">
            Add Cost
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
