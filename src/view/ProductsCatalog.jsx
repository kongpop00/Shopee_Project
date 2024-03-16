import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductsCatalog = () => {
  const { name } = useParams();
  const [data, setdata] = useState([]);
  const getProductsCatalog = async () => {
    const res = await axios.get(
      `https://dummyjson.com/products/category/${name}`
    );
    console.log("=======", res.data.products);
    setdata(res.data.products);
  };
  useEffect(() => {
    getProductsCatalog();
  }, []);
  return (
    <div className=" max-w-7xl flex flex-col ju w-[100%] mt-[50px] m-[auto] ">
      <div className="  w-[100%] mt-[100px] lg:mt-[250px] flex justify-center">
        <h1 className="text-[25px] lg:text-[30px] text-[#555555de] w-[100%] h-[70px]  border-2 flex items-center pl-[30px]  ">
          หมวดหมู่ {name}
        </h1>
      </div>
      <div className="flex justify-center">
      <div className="max-w-7xl  mt-[40px]  justify-between gap-3 grid grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-6">
      {data.map((e) => {
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
    </div>
     


    </div>
  );
};

export default ProductsCatalog;
