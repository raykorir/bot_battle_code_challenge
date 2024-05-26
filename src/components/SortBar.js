import React from "react";

function SortBar({ handleSort }) {
  const sortOptions = [
    { label: "Sort by Health", value: "health" },
    { label: "Sort by Damage", value: "damage" },
    { label: "Sort by Armor", value: "armor" },
  ];

  return (
    <div className="ui buttons">
      {sortOptions.map((option) => (
        <button
          key={option.value}
          className="ui button"
          onClick={() => handleSort(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default SortBar;
