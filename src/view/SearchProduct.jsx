import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const SearchProduct = () => {
    const {products} = useParams();
    
    const [data ,setdata]=useState([])
    const search = async ()=>{
       const res = await axios.get(`https://dummyjson.com/products/search?q=${products}`)
        console.log(res.data.products.length);
        setdata(res.data.products)

    }
    useEffect(()=>{
        search()
    },[products])
  return (
    <div className='max-w-7xl  h-[100vh] m-[auto] mt-[250px]'>
      <div className='flex justify-center'>
        {data.length ==0 ? (
            <div className='text-[72px] text-[#353434bd]'>Product not found</div>
        )  
        
        :
       
         <div className='flex gap-3'>
            {data.map((e) => {
        return (
          <Link to={`/${e.id}`}
            key={e.id}
            className="w-[200px] h-[250px] border-2 flex flex-col justify-between relative hover:scale-105"
          >
            <div>
              <img className="w-[100%] h-[150px]" src={e.images[0]}></img>
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
            
        }

      </div>
    </div>
  )
}

export default SearchProduct
