import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingContext";
import axios from "axios";
export function FeaturedImageGallery({num}) {
    const {SingleProduct}=useShoppingCart()
    const[data,setdata]=useState([])
    const getSingleProduct = async () => {
        const respones = await axios.get(`https://dummyjson.com/products/${num}`);
        console.log(respones.data.images);
        setdata(respones.data.images)
        setActive(respones.data.images[0])
      };
      useEffect(()=>{
        getSingleProduct()
      },[])
  const [active, setActive] = React.useState('');
  const handleactive=  async()=>{
   await SingleProduct.array.forEach(element => {
        console.log('===========');
    });
  }
 useEffect(()=>{
    console.log('asdasd',data);
 },[])
  return (
    <div className="grid gap-4 justify-center items-center">
    <div>
      <img
        className="h-[200px]  max-w-full rounded-lg object-cover object-center md:h-[480px] m-[auto]"
        src={active}
        alt=""
      />
    </div>
    <div className="grid grid-cols-4 gap-3  ">
      {data.map((e) => (
        <div className="border-2" key={e.id}>
          <img
            onClick={() => setActive(e)}
            src={e}
            className="h-20  w-[150px] cursor-pointer object-cover object-center"
            alt="gallery-image"
          />
        </div>
      ))}
    </div>
  </div>
  );
}