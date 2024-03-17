import React from 'react'
import { useShoppingCart } from '../context/ShoppingContext';

const Cartitems = ({id,quantity}) => {
    const { shop ,increaseCartQuantitycart,decreaseCartQuantityCart,remove} = useShoppingCart();
    
   const items = shop.find((i) => i.id == id);
  
   

  return (
    <div className='w-[100%] h-[230px] lg:h-[150px] bg-white flex flex-col lg:flex-row items-center border-2 p-[10px] border-[#5555] mt-[20px]'>
      
        <div className='flex  w-[100%] lg:w-[40%] bg-white h-[100%] items-center '>
            <img src={items.images[0]} alt=""  className='w-[200px] h-[120px]'/>
            <div className='ml-[40px]'>{items.title} <div className='lg:hidden text-[#e72910f1]'>฿{items.price}</div></div>
           
        </div>

        <div className='flex mt-[20px] px-[20px] lg:px-[0px] lg:mt-[0px]  w-[100%] lg:w-[60%] h-[100%] items-center bg-white  justify-between lg:justify-around text-[16px]  '>
            <div className='hidden lg:flex'>฿{items.price}</div>
            <div className="flex  lg:ml-[20px] items-center text-center">
              <button onClick={()=>decreaseCartQuantityCart(id)} className="w-[30px] border-2">-</button>
              <div className="w-[50px] border-2">{quantity}</div>
              <button onClick={()=>increaseCartQuantitycart(id)} className="w-[30px] border-2">+</button>
            </div>
            <div className=''>฿{`${quantity*items.price}`}</div>
            <div className='flex '>
            <button onClick={ ()=>remove(id)} className='mr-[20px] bg-[#f03e3e] w-[70px] h-[40px] text-white'>ลบ</button>
            <button className=' bg-[#fa3e3e] w-[70px] h-[40px] text-white'>ชำระเงิน</button>
            </div>
          
        </div>
    </div>
  )
}

export default Cartitems
