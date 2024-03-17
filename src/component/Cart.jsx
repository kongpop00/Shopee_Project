import { useShoppingCart } from "../context/ShoppingContext";
import Cartitems from "./Cartitems";

const Cart = () => {
  const { cartItem } = useShoppingCart();

  return (
    <div className="max-w-7xl m-[auto] mt-[80px] lg:mt-[100px] bg-white h-[100vh] ">
      <div className="w-[100%] py-[30px] lg:py-[120px]  bg-white  ">
        <div className="w-[100%] h-[100px] flex px-[20px] lg:px-[30px] items-center bg-white">
          <img src="/logo/logo.svg" className="w-[130px] lg:w-[200px] " />
          <div className="text-[#ff450cfd] text-[20px] lg:text-[30px] mt-[15px] lg:mt-[20px] ml-[20px] border-l-2 border-[#ff450cfd] px-[20px]">
            รถเข็น
          </div>
        </div>
      </div>
      {cartItem.map((item, index) => (
        <Cartitems key={index} {...item} />
      ))}
    </div>
  );
};

export default Cart;
