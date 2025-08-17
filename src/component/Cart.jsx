import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useState,useEffect } from 'react';
function cart() {
  const cartItems=useSelector((store)=>store.cart.items);
  const [subTotal,setSubTotal]=useState(0);
  
  useEffect(()=>{
    let count=0;
    cartItems.forEach((item)=>{count=count+(item.price*item.quantity)});
    setSubTotal(count);
  },[cartItems])
  return (
    <div className='w-full h-fit flex flex-col items-center'>
      <div className='flex flex-row justify-evenly w-100'>
      <span className='-translate-x-1/2'>Shopping Cart:</span>
      <span className='translate-x-[100%]'>Price:</span>
      </div>
      <div>
        { !(cartItems.length==0) ? cartItems.map((item)=>{return <CartItem key={item.id} id={item.id} title={item.title} brand={item.brand} quantity={item.quantity} price={item.price} imgsrc={item.imgsrc}/>}):<div>No items in cart</div>
          } 
      </div>
      <div className='w-100 h-fit py-5 flex flex-row justify-end border-t-1 border-b-1'>
          Subtotal: {subTotal.toFixed(2)}
      </div>
    </div>
  )
}

export default cart