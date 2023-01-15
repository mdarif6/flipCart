import productsData from "../products.json";

export default function cartReducer(state, action) {
  switch (action.type) {
    case "SORTINGBYPRICE":
      return { ...state, sortByPrice: action.payload };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SELECT_CATEGORY":
      return {
        ...state,
        filterByCategories: [...state.filterByCategories, action.payload],
      };
    case "UNSELECT_CATEGORY":
      const filterByCategoriesCopy = [...state.filterByCategories];
      const removalCategoryIndex = filterByCategoriesCopy.indexOf(
        action.payload
      );
      filterByCategoriesCopy.splice(removalCategoryIndex, 1);
      return { ...state, filterByCategories: filterByCategoriesCopy };

    case "SET_BRANDS":
      return { ...state, brands: action.payload };

    case "SELECT_BRAND":
      return {
        ...state,
        filterByBrandName: [...state.filterByBrandName, action.payload],
      };
    case "UNSELECT_BRAND":
      const removeBrand = [...state.filterByBrandName];
      const indexOfRemoveBrand = removeBrand.indexOf(action.payload);
      removeBrand.splice(indexOfRemoveBrand, 1);
      return { ...state, filterByBrandName: removeBrand };

    case "SET_SIZES":
      return { ...state, sizes: action.payload };

    case "SELECT_SIZE":
      return {
        ...state,
        filterBySize: [...state.filterBySize, action.payload],
      };

    case "UNSELECT_SIZE":
      const filterBySizeCopy = [...state.filterBySize];
      const removeSizeIndex = filterBySizeCopy.indexOf(action.payload);
      filterBySizeCopy.splice(removeSizeIndex, 1);
      return { ...state, filterBySize: filterBySizeCopy };
    case "CLEAR_ALL":
      return {
        ...state,
        productsData,
        sortByPrice: "",
        filterByBrandName: [],
        filterByCategories: [],
        filterBySize: [],
      };
    default:
      return state;
  }
}
