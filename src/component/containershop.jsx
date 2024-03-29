import React, { useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingContext";
import axios from "axios";
import { Link } from "react-router-dom";
const Containershop = () => {
  const { shop, setShop } = useShoppingCart();
  const getAllProduct = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
    //console.log("==", res.data.products);
      setShop(res.data.products);
    } catch {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="max-w-7xl  h-[100%] bg-white mt-[40px]  justify-between gap-3 grid grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-6">
      {shop.map((e) => {
        return (
          <Link to={`/${e.id}`}
            key={e.id}
            className="w-[180px] h-[230px] md:w-[200px] md:h-[250px] border-2 flex flex-col justify-between relative hover:scale-105"
          >
            <div>
              <img className="w-[100%] h-[150px] " src={e.images[0]}></img>
            </div>

            <div className="pl-[10px]"> {e.title}</div>
            <div className="flex px-[10px] justify-between">
                <div className="text-[red]">฿ {e.price}</div>
                <div className="text-[12px] text-[#5555558e]">ขายแล้ว 0 ชิ้น</div>

            </div>
            <div className="absolute right-0 w-[50px] bg-amber-300 text-[red] text-[14px] font-[300] text-center">-{Math.ceil(e.discountPercentage)}%</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Containershop;
