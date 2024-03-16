import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FeaturedImageGallery } from "../component/FeaturedImageGallery";
import { useShoppingCart } from "../context/ShoppingContext";
import { Rating } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const SingleProduct = () => {
  const { setSingleProduct, SingleProduct } = useShoppingCart();

  const { id } = useParams();
  const [num] = useState(id);

  const getSingleProduct = async () => {
    const respones = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(respones.data);
    setSingleProduct(respones.data);
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  const discount =
    (SingleProduct.discountPercentage * SingleProduct.price) / 100;
  const discountPercentage = (SingleProduct.price - discount).toFixed(2);
  console.log(discountPercentage);

  return (
    <div className="max-w-7xl w-[100%] bg-white lg:p-[20px] xl:p-[0px] lg:mt-[200px] xl:mt-[250px] items-center mt-[150px] md:mt-[100px] m-[auto] flex flex-col lg:flex-row">
      <div className="w-[100%] lg:w-[50%]">
        {" "}
        <FeaturedImageGallery num={num} />
      </div>

      <div className="w-[100%] lg:w-[50%]  p-[10px] text-[12px] xl:text-[20px] md:text-[16px] flex justify-center  items-center xl:ml-[20px] xl:mb-[120px]">
        <div className="bg-white w-[100%] h-[100%] p-[20px]  lg:p-[40px] flex flex-col">
          <div className="text-[20px] xl:text-[30px]">{SingleProduct.title}</div>
          <div className="text-[#555555b0] mt-[10px] h-[100%]">
            {SingleProduct.description}
          </div>

          <div className="flex items-center mt-[20px]  ">
            {SingleProduct.rating}{" "}
            <Rating
              value={4}
              readonly
              className=" ml-[10px] border-r-2 pr-[10px]"
            />
            <div className="text-[#555555b0] ml-[10px]">ขายแล้ว 0 ชิ้น</div>
          </div>

          <div className="flex mt-[30px] items-center">
            <h1 className="text-[20px] lg:text-[30px] text-[#555555b0] line-through">
              ฿{SingleProduct.price}
            </h1>
            <h1 className="ml-[30px] text-[red] text-[20px] lg:text-[35px]">
              ฿{discountPercentage}
            </h1>
            <div className="text-white w-[100px] bg-[#f84e30] h-[30px] ml-[20px] flex justify-center items-center px-[70px]">
              ส่วนลด{SingleProduct.discountPercentage}%
            </div>
          </div>

          <div className="flex  items-center mt-[30px] text-[#3f3e3eb0]">
            <label>จำนวน</label>
            <div className="flex ml-[20px] items-center text-center">
              <div className="w-[30px] border-2">-</div>
              <div className="w-[50px] border-2">0</div>
              <div className="w-[30px] border-2">+</div>
            </div>
            <label className="ml-[20px]">
              มีสินค้าทั้งหมด {SingleProduct.stock} ชิ้น
            </label>
          </div>
          <div className="flex mt-[50px] w-[280px] justify-between  text-white">
            <button className="w-[120px]  h-[50px] bg-[#fff1dd] text-[#f86d54] border-2 border-[#f38471] text-[14px]">
              <FontAwesomeIcon icon={faCartPlus} /> เพิ่มไปยังรถเข็น
            </button>
            <button className="w-[120px]  h-[50px] bg-[#f84e30] text-[14px]">
              ซื้อสินค้า
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
