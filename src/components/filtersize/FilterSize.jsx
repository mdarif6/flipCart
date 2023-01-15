import React from "react";
import { useCart } from "../../context/cart-context";

export default function FilterSize({ size, sizeHandle }) {
  const { state } = useCart();
  const sizeCheckedInArray = state.filterBySize.indexOf(size) !== -1;
  return (
    <div className="flipcart-filter-sorting-categories">
      <label>
        <input
          type="checkbox"
          checked={sizeCheckedInArray}
          onChange={sizeHandle}
        />
        {size}
      </label>
    </div>
  );
}
