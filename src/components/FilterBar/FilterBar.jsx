import { useState } from "react";
import FilterIcon from "../../assets/icons/filter.svg";
import "./FilterBar.scss";

function FilterBar({ filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  const baseSpirits = [
    "All",
    "Gin",
    "Vodka",
    "Whiskey",
    "Rum",
    "Tequila",
    "Brandy",
    "Other",
  ];
  const methods = ["All", "Shaken", "Stirred", "Built", "Blended"];

  const handleSpiritChange = (spirit) => {
    setFilters((prev) => ({ ...prev, baseSpirit: spirit }));
  };

  const handleMethodChange = (method) => {
    setFilters((prev) => ({ ...prev, method: method }));
  };

  const clearFilters = () => {
    setFilters({ baseSpirit: "All", method: "All" });
  };

  const hasActiveFilters =
    filters.baseSpirit !== "All" || filters.method !== "All";

  return (
    <div className="filter-bar">
      <button
        className={`filter-bar__toggle ${hasActiveFilters ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle filters"
      >
        <img src={FilterIcon} alt="" className="filter-bar__icon" />
        <span className="filter-bar__text">Filters</span>
        {hasActiveFilters && <span className="filter-bar__badge"></span>}
      </button>

      {isOpen && (
        <div className="filter-bar__content">
          <div className="filter-bar__section">
            <label className="filter-bar__label">Base Spirit:</label>
            <div className="filter-bar__buttons">
              {baseSpirits.map((spirit) => (
                <button
                  key={spirit}
                  className={`filter-bar__button ${
                    filters.baseSpirit === spirit ? "active" : ""
                  }`}
                  onClick={() => handleSpiritChange(spirit)}
                >
                  {spirit}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-bar__section">
            <label className="filter-bar__label">Method:</label>
            <div className="filter-bar__buttons">
              {methods.map((method) => (
                <button
                  key={method}
                  className={`filter-bar__button ${
                    filters.method === method ? "active" : ""
                  }`}
                  onClick={() => handleMethodChange(method)}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <button className="filter-bar__clear" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default FilterBar;
