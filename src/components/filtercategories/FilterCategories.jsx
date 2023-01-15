import React from "react";

export default function FilterCategories({ category, categoryHandle }) {
  return (
    <div className="flipcart-filter-sorting-categories">
      <label>
        <input type="checkbox" onChange={categoryHandle} />
        {category}
      </label>
    </div>
  );
}
