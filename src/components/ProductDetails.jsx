import { useState, useEffect } from "react";
import CostList from "./CostList";
import { getAllCosts } from "../api/costApi";
import { Card } from "flowbite-react";
import { calculateTotalCost } from "../services/calculate-total-cost";
import { updateProduct } from "../api/productApi"; // Import the updateProduct function

const ProductDetails = ({ product, onAddCost, onUpdateCost, onDeleteCost }) => {
  const [newCost, setNewCost] = useState({ costId: "", quantity: "", unit: "" });
  const [availableCosts, setAvailableCosts] = useState([]);
  const [productCostIds, setProductCostIds] = useState([]);
  const [unitTotalCost, setUnitTotalCost] = useState(0);
  const [baseQuantity, setBaseQuantity] = useState(product.base_quantity);
  const [unitPrice, setUnitPrice] = useState((unitTotalCost * 1.2).toFixed(2));

  useEffect(() => {
    // Update the state whenever the product's costs change
    setProductCostIds(product.costs.map(cost => cost.cost._id));
    const totalCost = calculateTotalCost(product, availableCosts);
    setUnitTotalCost((totalCost / baseQuantity).toFixed(2));
    setUnitPrice((totalCost / baseQuantity * 1.2).toFixed(2));
  }, [product, availableCosts, baseQuantity]);

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

  const handleSave = () => {
    const updatedProductData = {
      base_quantity: baseQuantity,
      unit_total_cost: unitTotalCost,
      unit_price: unitPrice
    };

    updateProduct(product._id, updatedProductData)
      .then((updatedProduct) => {
        console.log("Product updated successfully:", updatedProduct);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-secondary">{product.name}</h1>
      <Card className="mb-10 mt-5">
        <p>Base Quantity: {baseQuantity}</p>
        <input
          type="range"
          min="1"
          max="51"
          value={baseQuantity}
          onChange={(e) => setBaseQuantity(e.target.value)}
          className="slider"
        />
        <p>Unit Total Cost: {unitTotalCost} €</p>
        <p>Unit Price: {unitPrice} €</p>
        <button onClick={handleSave} className="mt-4 btn btn-primary">
          Save
        </button>
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
