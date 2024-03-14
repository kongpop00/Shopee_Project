import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useShoppingCart } from '../context/ShoppingContext';


const Category = () => {
    const  {Categories,setCategories}=useShoppingCart();
   
    const getCategories = async()=>{
        const respones = await axios.get('https://dummyjson.com/products/categories')
        console.log('===========',respones.data);
        setCategories(respones.data)
    }
    useEffect(()=>{
        getCategories()
        
    },[])
  return (
    <div className='mt-[50px]'>
        <div className='w-[100%] h-[40px]  border-2'>
            <span className='flex items-center p-[5px] ml-[20px] text-[#555]'>หมวดหมู่</span>
        </div>
    <div className=' w-[1280px] h-[270px] grid grid-cols-10 overflow-x-scroll  '>

      {Categories.map((e,index)=>{
        return(
            <div className=' w-[100%] bg-black border-2 text-[14px]  flex flex-col  justify-center ' key={index}>
                <div className='bg-slate-50 h-[100%] flex flex-col justify-end items-center'>
                    {e}
                </div>
            </div>
        )
      })}          
    </div>
    </div>
  )
}

export default Category
