
import { Routes, Route } from "react-router-dom";
import Home from './view/Home';
import Nav from './component/Nav';
import { ShoppingCartProvider } from "./context/ShoppingContext";
function App() {
 
  
  return (
      <ShoppingCartProvider>
    <div className=" ">
     <div className="fixed top-0 w-[100%] z-10" ><Nav/></div>
      <Routes>
              <Route path="/" element={<Home />} />
             
             
           
            </Routes>
    </div>
    </ShoppingCartProvider>
  )
}

export default App
