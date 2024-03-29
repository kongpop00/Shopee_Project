
import { Routes, Route } from "react-router-dom";
import Home from './view/Home';
import Nav from './component/Nav';
import { ShoppingCartProvider } from "./context/ShoppingContext";
import SingleProduct from "./view/SingleProduct";
import ProductsCatalog from "./view/ProductsCatalog";
import SearchProduct from "./view/SearchProduct";
import Cart from "./component/Cart";
function App() {
 
  
  return (
      <ShoppingCartProvider>
    <div className="bg-white ">

   <div className="fixed top-0 w-[100%] z-10" ><Nav/></div>
      <Routes>
              <Route path="/" element={<Home />} />
             <Route path='/:id' element={<SingleProduct/>}/>
              <Route path='catalog/:name' element={<ProductsCatalog/>}/>
              <Route path='search/:products' element={<SearchProduct/>}/>
              <Route path='cart' element={<Cart/>}/>
             
           
            </Routes>
         
    </div>
    </ShoppingCartProvider>
  )
}

export default App
