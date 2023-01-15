import React from "react";

export default function FilterBrands({ brand, brandHandle }) {
  return (
    <div className="flipcart-filter-sorting-categories">
      <label>
        <input type="checkbox" onChange={brandHandle} />
        {brand}
      </label>
    </div>
  );
}
