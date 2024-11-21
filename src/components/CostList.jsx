import CostCard from "./CostCard";

const CostList = ({ costs, onUpdate, onDelete }) => (
  <div>
    {costs.map((cost) => (
      <CostCard
        key={cost._id}
        cost={cost}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default CostList;
