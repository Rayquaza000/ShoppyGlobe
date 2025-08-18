import React from 'react';
import reacticon from "../assets/react.svg";
import { removeItem, updateItemCount } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function CartItem({id,title,brand,quantity,price,imgsrc}) {
    const cartItems=useSelector((store)=>store.cart.items);
    const cartCount=useSelector((store)=>store.cart.count);
    const dispatch=useDispatch();
  return (
    <div className='flex flex-row items-start justify-evenly w-100 h-35 p-2 m-auto border-t-1 border-b-1 border-black'>
        <img src={imgsrc} className='w-30 h-30'></img>
        <div className='flex flex-col justify-end h-full mx-5'>
            <span>{brand}</span>
        <span>{title}</span>
        <div className='flex flex-row'>
            <button className='px-3 bg-gray-400 rounded-l-[5px]' onClick={()=>{dispatch(updateItemCount([id,-1]));localStorage.setItem("cartItems",cartItems.toString());localStorage.setItem("cartCount",cartCount.toString());}}>-</button>
            <span className='px-3 bg-amber-200'>{quantity}</span>
            <button className='px-3 bg-gray-400 rounded-r-[5px]' onClick={()=>{dispatch(updateItemCount([id,1]));localStorage.setItem("cartItems",cartItems.toString());localStorage.setItem("cartCount",cartCount.toString());}}>+</button>
        </div>
        <span className='underline underline-offset-2 text-red-600' onClick={()=>{dispatch(removeItem(id));localStorage.setItem("cartItems",cartItems.toString());localStorage.setItem("cartCount",cartCount.toString());}}>Remove Item</span>
        </div>
        <div className='flex flex-col h-full justify-end'>
            <span>${price}</span>
        </div>
    </div>
  )
}

export default CartItem