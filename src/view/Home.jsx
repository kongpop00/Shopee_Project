import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Category from '../component/Category'





const Home = () => {
  
  return (
    <div className='flex flex-col justify-center items-center  w-[100%]'>
     
        <Header/>
        <Category/>
     

        
    </div>
  )
}

export default Home 
