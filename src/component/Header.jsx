import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import shoppyglobe from "../assets/shoppy globe.png"
import { setCount } from '../utils/cartSlice';
import { useEffect } from 'react';
function Header() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [searchValue,setSearchValue]=useState();
  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");
    dispatch(setCount(storedCount ? parseInt(storedCount) : 0));
  }, [dispatch]);
  const countOfItemsInCart=useSelector((store)=>store.cart.count);
  
  function handleSearchButton(){
      navigate("/search/"+searchValue);
      setSearchValue("");
  }
  return (
    <>
      <header className='flex flex-wrap w-full h-fit py-2 px-10 items-center justify-evenly md:mt-2 md:mb-2'>
        <div className='flex flex-col justify-center bg-orange-200 leading-[0.7] h-15 py-3 rounded-[10px] px-5 border-1 border-black md:my-2 sm:my-2'>
            <span className='bg-red-600 font-bold text-white p-2'>Shoppy Globe</span>
        </div>
        <div className='flex flex-row bg-[#595959] min-w-100 w-200 h-15 rounded-[10px] border-1 border-black px-2.5 py-2 justify-evenly items-center '>
            <span className='text-white h-full px-2 flex items-center rounded-[10px]'><NavLink to="./" className={({isActive})=>(isActive?'bg-white text-black px-2 rounded-[10px] h-full flex flex-row items-center justify-center':'')}> Home</NavLink></span>
            <div className='w-fit flex flex-row h-full'>
              <input type='text' onChange={(e)=>{setSearchValue(e.target.value)}} value={searchValue} className='rounded-[10px] w-80 mx-2.5 px-1 bg-white outline-none py-2' placeholder=" Search by product name"></input>
              <button className='rounded-[10px] bg-white h-full w-12 flex justify-center items-center' onClick={handleSearchButton}><FaSearch /></button>
            </div>
        </div>
        <div className='relative h-fit md:my-3 sm:my-3  '>
          <IoCartOutline className='w-8 h-8' onClick={()=>{navigate("./cart")}}/>
            <div className='absolute text-[12px] w-4 h-4 rounded-[100%] bg-red-600 left-[100%] -top-[50%] -translate-x-[50%] translate-y-[50%]'>
              <span className='absolute top-[0%] left-[50%] text-white -translate-x-[50%]'>{countOfItemsInCart}</span>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header