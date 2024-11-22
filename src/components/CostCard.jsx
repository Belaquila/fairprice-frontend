import { useState, useEffect } from "react";
import { getAllCosts } from "../api/costApi";
import { Button } from "flowbite-react";
const CostCard = ({ cost, onUpdate, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [quantity, setQuantity] = useState(cost.quantity);
  const [unit, setUnit] = useState(cost.unit);
  const [costDetails, setCostDetails] = useState(null);

  useEffect(() => {
    getAllCosts()
      .then((data) => {
        const costDetail = data.find((c) => c._id === cost.cost._id);
        setCostDetails(costDetail);
        onUpdate(cost._id, { quantity, unit });
      })
      .catch((error) => console.error("Error fetching cost details:", error));
  }, [cost.cost._id]);

  const handleSave = () => {
    onUpdate(cost._id, { quantity, unit });
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        {costDetails ? (
          <>
            <p className="font-bold">{costDetails.name}</p>
            <p>{costDetails.category}</p>
            <p>{costDetails.cost_type}</p>
            <p>{costDetails._id}</p>
          </>
        ) : (
          <p>Loading cost details...</p>
        )}
        <p>
          {editMode ? (
            <>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border p-1 rounded"
              />
              <input
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="border p-1 rounded ml-2"
              />
            </>
          ) : (
            `${quantity} ${unit}`
          )}
        </p>
      </div>
      {editMode ? (
        <button onClick={handleSave} className="text-green-500">Save</button>
      ) : (
        <button onClick={() => setEditMode(true)} className="text-blue-500">
          Edit
        </button>
      )}
      <Button onClick={() => onDelete(cost._id)} className="text-red-500">
        Delete
      </Button>
    </div>
  );
};

export default CostCard;
