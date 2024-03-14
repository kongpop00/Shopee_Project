import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";




const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
 
const [Categories,setCategories]=useState([])
  return (
    <ShoppingCartContext.Provider
      value={{
        Categories,
        setCategories
      }}
    >
      {children}
      
    </ShoppingCartContext.Provider>
  );
}