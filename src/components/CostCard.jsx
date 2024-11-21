import { useState } from "react";

const CostCard = ({ cost, onUpdate, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [quantity, setQuantity] = useState(cost.quantity);
  const [unit, setUnit] = useState(cost.unit);

  const handleSave = () => {
    onUpdate(cost._id, { quantity, unit });
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        <p className="font-bold">{cost.cost.name}</p>
        <p className="font-bold">{cost.cost._id}</p>
        <p className="font-bold">{cost._id}</p>
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
      <button onClick={() => onDelete(cost._id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default CostCard;
