import React from "react";
import "./Main.css";
import ProductCard from "../productcard/ProductCard";
import { useCart } from "../../context/cart-context";
import {
  filteredByBrandName,
  filteredByCategory,
  filteredBySize,
  sortedByLowAndHighPrice,
} from "../../context/utility";
export default function Main({ setShowSideBar }) {
  const { state, dispatch } = useCart();
  const filteringByPrice = sortedByLowAndHighPrice(
    state.productsData,
    state.sortByPrice
  );

  const filteringByBrandName = filteredByBrandName(
    filteringByPrice,
    state.filterByBrandName
  );

  const filteringByCategory = filteredByCategory(
    filteringByBrandName,
    state.filterByCategories
  );

  const filteringBySize = filteredBySize(
    filteringByCategory,
    state.filterBySize
  );

  function showHideHandle() {
    setShowSideBar((previous) => !previous);
  }

  return (
    <>
      <i className="fas fa-bars burger-menu" onClick={showHideHandle}></i>
      <main>
        <div className="filpcart-products-listing">
          <div className="flipcart-product-heading">
            <span>Clothing And Accessories </span>
            <small>(Showing {filteringBySize.length} products)</small>
          </div>
          <div className="flipcart-main">
            {filteringBySize.map((item) => {
              return (
                <div>
                  <ProductCard key={item.id} item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
