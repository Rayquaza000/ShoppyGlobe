import React, { useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { setCart } from '../utils/cartSlice';

function PlacedOrder() {
    const dispatch=useDispatch();
    useEffect(()=>{
        
        dispatch(setCart({ items: [], count: 0 }));
        localStorage.setItem("cartItems","[]");
        localStorage.setItem("cartCount", "0");
    },[]);
    
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='rounded-[100%] border-green-700 items-center justify-center border-5 w-70 h-70 flex flex-row mt-10'>
        <TiTick className='w-2/3 h-2/3 text-green-700 '/>
        </div>
        <span className='text-green-700 font-bold mt-5 text-[20px]'>Order placed successfully</span>
    </div>
  )
}

export default PlacedOrder