import React, { useEffect, useState } from 'react'
import reacticon from "../assets/react.svg"
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem,updateItemCount } from '../utils/cartSlice';
import { useSelector } from 'react-redux';


function ProductCard({id,loading,imgsrc,brand,title,avgRating,warrantyInfo,availabilityStatus,shippingInfo,price}) {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [message,setMessage]=useState("");
    const cartItems=useSelector((store)=>store.cart.items);
    const cartCount=useSelector((store)=>store.cart.count);
    let fontSize="text-[16px]";
    if(title?.length>20)
    {
        fontSize="text-[12px]";
    }
    function handleViewDetails(){
        navigate('/product/'+id.toString());
    }
    function handleAddToCart(){
        let flag=0;
        cartItems.forEach((item)=>{if(item.id==id){flag=1}});
        if(flag==1)
        {
            dispatch(updateItemCount([id,1]));
            
        }
        else
        {
            dispatch(addItem({"id":id,"imgsrc":imgsrc,"brand":brand,"title":title,"avgRating":avgRating,"warrantyInfo":warrantyInfo,"availabilityStatus":availabilityStatus,"shippingInfo":shippingInfo,"price":price,"quantity":1}))
        }
//         const nextCount = flag ? cartCount + 1 : cartCount + 1;
//         localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
//   localStorage.setItem("cartCount", nextCount.toString());
//         console.log("item added to redux")
        setMessage("Item added to cart");

        setTimeout(()=>{setMessage("")},2000);
    }
    useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log("################",cartCount)
  localStorage.setItem("cartCount", cartCount.toString());
}, [cartItems, cartCount]);
  
        
  return (
    <div className='flex flex-row w-115 h-50 bg-white border-1 border-black rounded-[20px] m-2'>
        {message!=""?<div className='w-fit h-fit absolute p-2 px-5 top-[0px] right-[100px] bg-green-800 border-1 border-black text-[white]'>{message}</div>:null}
        {loading?<span className='self-center mx-auto font-bold text-neutral-500'> Loading data... </span> :
        <>
        <div className='flex items-center justify-center rounded-l-[20px] w-80 h-full border-1 border-black'>
        <img src={imgsrc} className='rounded-l-[20px] w-30 h-30'></img>
        </div>
        <div className='h-full w-100 p-2 flex flex-col border-1 border-black rounded-r-[20px]'>
            <span className='text-[18px]'>{brand}</span>
            <span className={`${fontSize} font-bold`}>{title}</span>
            <div className='flex flex-row'>
                <span className='w-fit text-[14px] p-0.5 rounded-[5px] border-1 border-black bg-[#ddd9c3] mr-2'>Avg. rating: {avgRating}</span> 
                <span className='w-fit text-[14px] p-0.5 rounded-[5px] border-1 border-black bg-[#ddd9c3]'>{warrantyInfo}</span>
            </div>
            <span className='text-[12px] text-[#948A54]'>{availabilityStatus}</span>
            <span className='text-[12px] text-[#948A54]'>{shippingInfo}</span>
            <span className='text-[18px] font-bold'>${price}</span>
            <div className='flex flex-row'>
                <div className='w-1/2 h-fit text-center border-black p-0.5 bg-amber-200 border-1' onClick={handleViewDetails}>View Details</div>
                <div className='w-1/2 h-fit text-center border-black p-0.5 bg-blue-300 border-1' onClick={handleAddToCart}>Add to Cart</div>
            </div>
        </div>
        </>
}
        
    </div>
  )
}

export default ProductCard