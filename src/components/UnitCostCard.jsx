import { Card, Button } from "flowbite-react";
//import { useNavigate } from "react-router-dom";
//import { deleteUnitCostById } from "../api/costApi"; // to be done

const UnitCostCard = ({ unitCost, onDelete }) => {
  //const navigate = useNavigate();

  const handleDelete = () => {
    deleteUnitCostById(product._id)
      .then(() => {
        if (onDelete) {
          onDelete(unitCost._id); // allow parent component to update UI
        }
      })
      .catch((error) => {
        console.error("Error deleting unit Cost:", error);
      });
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 max-w-64 flex flex-col">
      <div className="h-1/2 overflow-hidden">
        <img
          src={unitCost.imageUrl}
          alt={unitCost.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        <h3 className="text-lg font-bold  text-purple-700">{unitCost.name}</h3>
        <p>Value : ${unitCost.value.toFixed(2)}</p>
        <p>per: ${unitCost.unit}</p>
        <div className="flex space-x-2 mt-auto">
          {/* <button className="rounded font-normal bg-white text-green-700 border border-green-500 py-2 px-4" onClick={() => navigate(`/costs/${unitCost._id}`)}>Details</button> */}
          {/* <Button color="failure" onClick={handleDelete}>Delete</Button> */}
        </div>
      </div>
    </div>
  );
};

export default UnitCostCard;


//class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 max-w-64 flex flex-col"