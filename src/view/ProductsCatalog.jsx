import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductsCatalog = () => {
    const { name } = useParams();
    const [data, setdata]=useState([])
    const getProductsCatalog = async()=>{
        const res = await axios.get(`https://dummyjson.com/products/category/${name}`)
        console.log('=======',res.data.products );
        setdata(res.data.products )
    }
    useEffect(()=>{
        getProductsCatalog()
    },[])
  return (
    <div className='flex flex-col w-[1280px] m-[auto]'> 
    <div className=' m-[auto] w-[1280px]  mt-[250px] flex'>
       <h1 className='text-[30px] text-[#555555de] w-[100%] h-[70px] border-2 flex items-center pl-[30px]'>หมวดหมู่ {name}</h1>
      
    </div>
    <div className='w-[100%] h-[500px] mt-[70px] flex gap-3 flex-wrap' >
    {data.map((e) => {
        return (
          <Link to={`/${e.id}`}
            key={e.id}
            className="w-[200px] h-[250px] border-2 flex flex-col justify-between relative hover:scale-x-110 "
        
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
    </div>
  )
}

export default ProductsCatalog
