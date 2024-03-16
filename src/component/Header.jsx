import React from 'react'
import  { GalleryWithCarousel } from './Sliebar'

const Header = () => {
  return (
    <div className='max-w-7xl mt-[50px] lg:mt-[150px] xl:mt-[200px] ' >
      <div className='mt-[28px] w-[100%] h-[200px]  flex xl:gap-2 '>
        <div className='w-[100%] xl:w-[65%]  h-[180px] md:h-[300px] lg:h-[400px]'> <GalleryWithCarousel /></div>
        <div className='hidden lg:flex lg:h-[400px]  flex-col w-[40%] gap-2 p-[10px] '>
            <div className=' h-[50%]  bg-yellow-300'><img className='h-[100%] w-[100%]' src="/logo/slie5.png" alt="" /></div>
            <div className='h-[50%]  bg-amber-800'><img className='h-[100%] w-[100%]' src="/logo/slie4.png" alt="" /></div>
            
        </div>
      </div>
    </div>
  )
}

export default Header
