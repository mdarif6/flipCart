import React from "react";
import { useCart } from "../../context/cart-context";

export default function FilterBrands({ brand, brandHandle }) {
  const { state } = useCart();

  const brandCheckedInArray = state.filterByBrandName.indexOf(brand) !== -1;

  return (
    <div className="flipcart-filter-sorting-categories">
      <label>
        <input
          type="checkbox"
          checked={brandCheckedInArray}
          value={brand}
          onChange={brandHandle}
        />
        {brand}
      </label>
    </div>
  );
}
