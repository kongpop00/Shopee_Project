import React from 'react'
import Sliebar from './Sliebar'

const Header = () => {
  return (
    <div className='w-[1280px]  bg-white mt-[200px] p-[10px] ' >
      <div className='mt-[20px] w-[100%] h-[300px]  flex gap-2 '>
        <div className='w-[60%]  bg-red-500'> <Sliebar /></div>
        <div className='flex flex-col w-[40%] gap-2 p-[10px] '>
            <div className='h-[50%]  bg-yellow-300'><img className='h-[100%] w-[100%]' src="/logo/slie5.png" alt="" /></div>
            <div className='h-[50%]  bg-amber-800'><img className='h-[100%] w-[100%]' src="/logo/slie4.png" alt="" /></div>
            
        </div>
      </div>
    </div>
  )
}

export default Header
