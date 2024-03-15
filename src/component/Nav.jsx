
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCartShopping, faCircleQuestion, faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCart } from '../context/ShoppingContext'
import { Link } from 'react-router-dom'
const Nav = () => {
const [isopenProfile ,setIsopenProfile ]=useState(false)
const {Categories ,setSearch, handleSearch} =useShoppingCart()
const handleopenProfile=()=>{
  setIsopenProfile(!isopenProfile)
}
const stylebtn ='border-r-2 px-[10px] hover:text-[#4b4a4a9d]' 
const backgroundnav ="linear-gradient(180deg, rgba(247,57,0,1) 0%, rgba(255,106,0,1) 76%)"
  return (
    <div style={{background:`${backgroundnav }`}} className=' m-[auto] h-[200px]  w-[100%] flex flex-col justify-center items-center text-[15px]'>
       <div  className='w-[300px] xl:w-[1280px]  flex flex-col h-[10%] justify-around '>
           
            {/**แถวที่ 1 */}
            <div className=' hidden w-[100%] lg:flex  justify-between items-center h-[50px] '>
              <div className=' w-[40%] flex justify-between text-white'>
                <button className={stylebtn}>Seller Centre</button>
                <button className={stylebtn}>เริ่มต้นขายสินค้า</button>
                <button className={stylebtn}>ดาวน์โหลด</button>
                <button className='px-[10px] hover:text-[#4b4a4a9d]' >ติดตามเราบน</button>
                <div className='w-[12%]  flex justify-between'>
              <button><FontAwesomeIcon icon={faFacebook} /></button>
                <button><FontAwesomeIcon icon={faInstagram} /></button>
                <button><FontAwesomeIcon icon={faLine} /></button>
                </div>    
              </div>
              <div className='after flex  items-center justify-between w-[35%] text-red-50 '>
                 <button className={`pl-[10px] hover:text-[#4b4a4a9d]`}><FontAwesomeIcon icon={faBell} />การแจ้งเตือน</button>
                 <button className={`pl-[10px] hover:text-[#4b4a4a9d]`}><FontAwesomeIcon icon={faCircleQuestion} />ช่วยเหลือ</button>
                 <button className={`pl-[10px] hover:text-[#4b4a4a9d]`}><FontAwesomeIcon icon={faGlobe} /><select className="bg-transparent"> <option disabled selected>English</option> <option>ไทย</option></select></button>
                 <button onClick={handleopenProfile} className='flex relative'>
                  <div className="avatar">
                  <div  div className="w-6 rounded-full ">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                   </div>
                 <span className={`pl-[10px] hover:text-[#4b4a4a9d]`}>kongpop nualsaard</span>
                 {isopenProfile &&(
                  <div className='z-20 absolute bottom-[-130px] w-[200px] h-[120px] py-[10px] bg-white rounded-lg text-[#252525c7] flex flex-col justify-around'>
                      <a>บัญชีของฉัน</a>
                      <a>การซื้อของฉัน</a>
                      <a>ออกจากระบบ</a>
                  </div>
                 )}
                  </button>
                  
                 
              </div>
            </div>

          
          
            {/**แถวที่ 2 */}
            <div className='w-[full] h-[100px]  flex justify-around items-center mt-[10px]  '>
                 <Link to={'/ '}> <img src='/logo/logo.png' className='w-[] xl:w-[250px] text-emerald-50'></img></Link>
                  <div className='w-[65%] h-[45px] focus:border-none bg-white flex items-center justify-between  relative'>
                    <input className='h-[100%] w-[100%] pl-[40px] 'onChange={(e)=>setSearch(e.target.value)} placeholder='3.15 Mind Mounth Sale | ลดมากกว่า 50%' type='text'>
                    </input>
                   
                    <button onClick={ handleSearch} style={{background:`${backgroundnav }`}} className={`w-[70px] h-[80%]  flex justify-center items-center mr-[5px] text-white`}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <div className='w-700px flex  absolute bottom-[-30px]  w-[100%] justify-around text-white'>
                        
                        {Categories.slice(0,9).map((e,index)=>{
                          return(
                            <button className='hover:text-[#4b4a4a9d] hidden xl:flex' key={index}>{e}</button>
                          )
                        })}
                   </div>
                  </div>
                  
                  <div>
                    <div className=' relative' > <FontAwesomeIcon icon={faCartShopping} className='w-[40px] h-[100%] text-red-50 relative ' />
                    <div className='absolute right-[-15px] top-[-10px] w-[30px] h-[20px] rounded-[20px] bg-white text-center text-red-600'>0</div>
                    </div>
                   
                  </div>

             
            </div>
       </div>
    </div>
  )
}

export default Nav
