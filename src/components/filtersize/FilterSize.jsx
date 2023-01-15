import React from "react";

export default function FilterSize({ size, sizeHandle }) {
  return (
    <div className="flipcart-filter-sorting-categories">
      <label>
        <input type="checkbox" onChange={sizeHandle} />
        {size}
      </label>
    </div>
  );
}
