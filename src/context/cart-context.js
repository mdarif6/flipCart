import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartRedcuer";
import productsData from "../products.json";
const initialData = {
  productsData,
  sortByPrice: "",
  filterByBrandName: [],
  categories: [],
  filterByCategories: [],
  brands: [],
  sizes: [],
  filterBySize: [],
};
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialData);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider, initialData };
