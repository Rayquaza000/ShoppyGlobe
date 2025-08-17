import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate=useNavigate();
  return (
    <>
      <header className='flex flex-wrap w-full h-fit py-2 px-10 items-center justify-evenly'>
        <div className='flex flex-col justify-center bg-[#e46c0a] leading-[0.7] h-fit py-3 rounded-[10px] px-5 border-1 border-black'>
            <span className='text-[#FAC090] text-[22px]'>Shoppy Globe</span>
            <span className='text-white z-1 font-medium text-[22px]'>Shoppy Globe</span>
            <span className='text-[#FAC090] text-[22px]'>Shoppy Globe</span>
        </div>
        <div className='flex flex-wrap bg-[#595959] min-w-100 w-200 h-15 rounded-[10px] border-1 border-black px-2.5 py-2 justify-evenly items-center '>
            <span className='bg-white h-full px-2 flex items-center rounded-[10px]'>Home</span>
            <div className='w-fit flex flex-row h-full'>
              <input type='text' className='rounded-[10px] w-80 mx-2.5 px-1 bg-white outline-none py-2' placeholder=" Search by product name"></input>
              <button className='rounded-[10px] bg-white h-full w-12 flex justify-center items-center'><FaSearch /></button>
            </div>
        </div>
        <div>
          <IoCartOutline className='w-8 h-8' onClick={()=>{navigate("./cart")}}/>
        </div>
      </header>
    </>
  )
}

export default Header