import React from "react";
import { useCart } from "../../context/cart-context";

export default function FilterCategories({ category, categoryHandle }) {
  const { state } = useCart();
  const categoryCheckedInArray =
    state.filterByCategories.indexOf(category) !== -1;
  return (
    <div className="flipcart-filter-sorting-categories">
      <label>
        <input
          type="checkbox"
          checked={categoryCheckedInArray}
          onChange={categoryHandle}
        />
        {category}
      </label>
    </div>
  );
}
