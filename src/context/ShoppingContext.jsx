import {
  createContext,
  useContext,
  useState,
} from "react";

import { useNavigate } from 'react-router-dom';


const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {

const [isopen ,setisopen]=useState(true)
const navigate = useNavigate();
const [Categories,setCategories]=useState([])
const [shop,setShop]=useState([])
const [SingleProduct,setSingleProduct]=useState([])
const [search ,setSearch]=useState("")


const handleSearch=()=>{
 console.log('======',search);
 setSearch("")
 if(search.length >0){
  navigate(`search/${search}`);
 }

}
  return (
    <ShoppingCartContext.Provider
      value={{
        Categories,
        setCategories,
        shop,setShop,
        SingleProduct,
        setSingleProduct,
        search
         ,setSearch,
         handleSearch,
         isopen 
         ,setisopen
      }}
    >
      {children}
      
    </ShoppingCartContext.Provider>
  );
}