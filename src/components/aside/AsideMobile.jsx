import React, { useEffect } from "react";
import { useCart } from "../../context/cart-context";
import FilterBrands from "../filterbrands/FilterBrands";
import FilterCategories from "../filtercategories/FilterCategories";
import FilterSize from "../filtersize/FilterSize";
import "./Aside.css";

export default function AsideMobile() {
  const { state, dispatch } = useCart();
  const getCategories = (data) => {
    let categoryArray = data.map((item) => item.category);
    return categoryArray.filter((item, index, arr) => {
      if (arr.indexOf(item) === index) {
        return item;
      }
    });
  };
  let uniqueCategoriesArray = getCategories(state.productsData);

  const getBrandNames = (data) => {
    let brandNameArray = data.map((item) => item.companyName);
    return brandNameArray.filter((item, index, arr) => {
      if (arr.indexOf(item) === index) {
        return item;
      }
    });
  };

  let uniqueBrandArray = getBrandNames(state.productsData);

  const getSizeArray = (data) => {
    let sizeArray = data.map((item) => item.size);
    return sizeArray.filter((item, index, arr) => {
      if (arr.indexOf(item) === index) {
        return item;
      }
    });
  };

  let uniqueSizeArray = getSizeArray(state.productsData);
  useEffect(() => {
    dispatch({ type: "SET_CATEGORIES", payload: uniqueCategoriesArray });
    dispatch({ type: "SET_BRANDS", payload: uniqueBrandArray });
    dispatch({ type: "SET_SIZES", payload: uniqueSizeArray });
  }, []);

  const categorySelectAndUnselect = (e, category) => {
    if (e.target.checked) {
      dispatch({ type: "SELECT_CATEGORY", payload: category });
    } else {
      dispatch({ type: "UNSELECT_CATEGORY", payload: category });
    }
  };

  const sizeSelectAndUnSelect = (e, size) => {
    if (e.target.checked) {
      dispatch({ type: "SELECT_SIZE", payload: size });
    } else {
      dispatch({ type: "UNSELECT_SIZE", payload: size });
    }
  };
  const brandSelectUnselect = (e, brand) => {
    if (e.target.checked) {
      dispatch({ type: "SELECT_BRAND", payload: brand });
    } else {
      dispatch({ type: "UNSELECT_BRAND", payload: brand });
    }
  };

  return (
    <div className="flipcart-aside-mobile-filter">
      <div className="flipcart-filter-heading">
        <div>Filters</div>
        <button
          className="flipcart-clear-btn"
          onClick={() => {
            // dispatch({ type: "SORTINGBYPRICE", payload: "" });
            // dispatch({ type: "SELECT_CATEGORY", payload: "" });
          }}
        >
          CLEAR ALL
        </button>
      </div>

      <div className="flipcart-sorting-filtering">
        <div className="flipcart-filter-name">Low and High Price</div>
        <div>
          <div className="flipcart-filter-sorting-categories">
            <input
              type="radio"
              id="LTH"
              name="price"
              checked={state.sortByPrice === "LOW_TO_HIGH"}
              onChange={() => {
                dispatch({ type: "SORTINGBYPRICE", payload: "LOW_TO_HIGH" });
              }}
            />
            <label htmlFor="LTH"> Low to High </label>
          </div>
          <div className="flipcart-filter-sorting-categories">
            <input
              type="radio"
              id="HTL"
              name="price"
              checked={state.sortByPrice === "HIGH_TO_LOW"}
              onChange={() => {
                dispatch({ type: "SORTINGBYPRICE", payload: "HIGH_TO_LOW" });
              }}
            />
            <label htmlFor="HTL"> High to Low </label>
          </div>
        </div>

        {/*  */}
        <div className="flipcart-filter-name">Select Category</div>
        {state.categories.map((category) => {
          return (
            <FilterCategories
              category={category}
              categoryHandle={(e) => categorySelectAndUnselect(e, category)}
            />
          );
        })}

        {/*  */}
        <div className="flipcart-filter-name">Select Size</div>
        {state.sizes.map((size) => {
          return (
            <FilterSize
              size={size}
              sizeHandle={(e) => sizeSelectAndUnSelect(e, size)}
            />
          );
        })}

        {/*  */}
        <div className="flipcart-filter-name">Select Brands</div>
        {state.brands.map((brand) => {
          return (
            <FilterBrands
              brand={brand}
              brandHandle={(e) => brandSelectUnselect(e, brand)}
            />
          );
        })}
      </div>
    </div>
  );
}
