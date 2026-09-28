function FilterBar({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-bar">

      <button
        className={currentFilter === "All" ? "active-filter" : ""}
        onClick={() => onFilterChange("All")}
      >
        All
      </button>

      <button
        className={currentFilter === "Active" ? "active-filter" : ""}
        onClick={() => onFilterChange("Active")}
      >
        Active
      </button>

      <button
        className={currentFilter === "Completed" ? "active-filter" : ""}
        onClick={() => onFilterChange("Completed")}
      >
        Completed
      </button>

    </div>
  );
}

export default FilterBar;