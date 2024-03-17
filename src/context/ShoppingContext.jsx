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
const [cartItem ,setCartItem]=useState([])
const [addcart ,setAddcart]=useState([])

const handleSearch=()=>{
 console.log('======',search);
 setSearch("")
 if(search.length >0){
  navigate(`search/${search}`);
 }

}
const getQeantity = (id) => {
  return addcart.find((item) => item.id === id)?.quantity || 0;
};

const remove = (id) => {
  setCartItem((CurrentCart) => {
    return CurrentCart.filter((item) => item.id !== id);
  });
};
const increaseCartQuantity = (id) => {
  setAddcart((CurrentCart) => {
    if (CurrentCart.find((item) => item.id === id) == null) {
      return [...CurrentCart, { id, quantity: 1 }];
    } else {
      return CurrentCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
    }
  });
};
const increaseCartQuantitycart = (id) => {
  setCartItem((CurrentCart) => {
    if (CurrentCart.find((item) => item.id === id) == null) {
      return [...CurrentCart, { id, quantity: 1 }];
    } else {
      return CurrentCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
    }
  });
};
const decreaseCartQuantity = (id) => {
  setAddcart((CurrentCart) => {
    if (CurrentCart.find((item) => item.id === id)?.quantity === 1) {
      return CurrentCart.filter((item) => item.id !== id);
    } else {
      return CurrentCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
  });
};
const decreaseCartQuantityCart = (id) => {
  setCartItem((CurrentCart) => {
    if (CurrentCart.find((item) => item.id === id)?.quantity === 1) {
      return CurrentCart.filter((item) => item.id !== id);
    } else {
      return CurrentCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
  });
};


const cartQeantity = cartItem.reduce(
  (qeantity, item) => item.quantity + qeantity,
  0
);
const addtocart =()=>{
  setCartItem(addcart)
  console.log(cartItem);
  alert('สินค้าอยู่ในรถเข็นเรียบร้อย')
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
         ,setisopen,
         getQeantity,
         increaseCartQuantity,
         decreaseCartQuantity,
         cartQeantity ,
         cartItem,
         addtocart,increaseCartQuantitycart,decreaseCartQuantityCart,
         remove
      }}
    >
      {children}
      
    </ShoppingCartContext.Provider>
  );
}