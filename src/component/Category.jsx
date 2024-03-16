import axios from "axios";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingContext";
import catalog from "../../public/catalog/catalog.json";
import { Link } from "react-router-dom";
import Btngohome from "./Btngohome";
const Category = () => {
  const { Categories, setCategories, shop } = useShoppingCart();

  const getCategories = async () => {
    const respones = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    console.log("===========", respones.data);
    setCategories(respones.data);
  };
  const category = shop.filter((e) => e.category.includes("fragrances"));
  console.log("ddddd", category);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className=" w-[100%] md:mt-[120px] lg:mt-[250px] relative ">
      <div className="w-[100%] h-[40px]   ">
        <span className="absolute left-0 flex items-center p-[5px] ml-[20px] text-[#555]">
          หมวดหมู่
        </span>
      </div>
      <div className="  h-[270px] w-[1280px] grid grid-cols-10 ">
        {catalog.map((e) => {
          return (
            <Link
              to={`catalog/${e.name}`}
              className="  border-2 text-[14px]  flex flex-col  justify-center overflow-hidden "
              key={e.id}
            >
              <button className="bg-slate-50 h-[100%] flex flex-col justify-between items-center hover:scale-110">
                <img className="w-[70px] mt-[20px]" src={e.img} />
                <span>{e.name}</span>
              </button>
            </Link>
          );
        })}
      </div>
     
    </div>
  );
};

export default Category;
