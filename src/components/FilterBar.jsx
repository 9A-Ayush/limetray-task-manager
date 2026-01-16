export const FilterBar = ({ current, onChange }) => {
  return (
    <div className="filter-bar">
      <button className={current === "all" ? "active" : ""} onClick={() => onChange("all")}>All</button>
      <button className={current === "completed" ? "active" : ""} onClick={() => onChange("completed")}>Completed</button>
      <button className={current === "pending" ? "active" : ""} onClick={() => onChange("pending")}>Pending</button>
    </div>
  );
};