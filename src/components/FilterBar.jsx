import { categories } from "../data.js";

function FilterBar({ selected, onSelect }) {
  const options = ["ທັງໝົດ", ...categories];
  
  return (
    <div className="filter-row">
      {options.map((c) => (
        <button
          key={c}
          className={"filter-btn" + (selected === c ? " active" : "")}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;