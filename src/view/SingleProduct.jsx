import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FeaturedImageGallery } from "../component/FeaturedImageGallery";
import { useShoppingCart } from "../context/ShoppingContext";
import { Rating } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
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
    <div className="w-[1280px] h-[700px]  border-2 mt-[250px] m-[auto] flex ">
      <div className="w-[40%]">
        {" "}
        <FeaturedImageGallery num={num} />
      </div>
      <div className="w-[60%]  flex justify-center items-center">
        <div className="bg-white w-[100%] h-[100%] p-[40px] flex flex-col">
          <div className="text-[20px]">{SingleProduct.title}</div>
          <div className="text-[#555555b0] mt-[10px]">
            {SingleProduct.description}
          </div>

          <div className="flex ">
            {SingleProduct.rating}{" "}
            <Rating
              value={4}
              readonly
              className="ml-[10px] border-r-2 pr-[10px]"
            />
            <div className="text-[#555555b0]">ขายแล้ว 0 ชิ้น</div>
          </div>
          <div className="flex mt-[30px] items-center">
            <h1 className="text-[30px] text-[#555555b0] line-through">
              ฿{SingleProduct.price}
            </h1>
            <h1 className="ml-[30px] text-[red] text-[35px]">
              ฿{discountPercentage}
            </h1>
            <div className="text-white w-[100px] bg-[#f84e30] h-[30px] ml-[20px] flex justify-center items-center">
            ส่วนลด{SingleProduct.discountPercentage}%
            </div>
          </div>

          <div className="flex items-center mt-[30px] text-[#3f3e3eb0]">
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
          <div className="flex mt-[50px] w-[320px] justify-between text-white">
            <button className="w-[150px]  h-[50px] bg-[#fff1dd] text-[#f86d54] border-2 border-[#f38471] text-[14px]"><FontAwesomeIcon icon={faCartPlus} /> เพิ่มไปยังรถเข็น</button>
            <button className="w-[150px]  h-[50px] bg-[#f84e30] text-[14px]" >ซื้อสินค้า</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
