import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import { useDispatch } from 'react-redux'
import { updateItemCount,addItem } from '../utils/cartSlice';
import { useSelector } from 'react-redux';

function ProductDetail() {
  const params=useParams()
  const [message,setMessage]=useState("");
  const [currentProduct,setCurrentProduct]=useState(null);
  const {data,loading,error}=useFetch("https://dummyjson.com/products");
  const [moreDescription,setMoreDescription]=useState(false);
  const cartItems=useSelector((store)=>store.cart.items);
  const cartCount=useSelector((store)=>store.cart.count);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(data){
    setCurrentProduct(data.products.filter((item)=>item.id==params.id));
    }
  },[data])
  
  function handleAddToCart(){
    let flag=0;
            cartItems.forEach((item)=>{if(item.id==parseInt(params.id)){flag=1}});
            if(flag==1)
            {
                dispatch(updateItemCount([currentProduct[0].id,1]));
            }
            else
            {
                dispatch(addItem({"id":currentProduct[0].id,"imgsrc":currentProduct[0].thumbnail,"brand":currentProduct[0].brand,"title":currentProduct[0].title,"avgRating":currentProduct[0].avgRating,"warrantyInfo":currentProduct[0].warrantyInfo,"availabilityStatus":currentProduct[0].availabilityStatus,"shippingInfo":currentProduct[0].shippingInfo,"price":currentProduct[0].price,"quantity":1}))
            }

            setMessage("Item added to cart");
            setTimeout(()=>{setMessage("")},2000);

            
            console.log("item added to redux")
  }
            useEffect(()=>{localStorage.setItem("cartItems",JSON.stringify(cartItems));
            localStorage.setItem("cartCount",cartCount.toString());},[cartItems,cartCount]);
  return (
     loading ? <div className='flex flex-row items-center justify-center h-full font-bold text-neutral-700 mt-5'>Loading</div> :
    <div className='flex flex-col mx-auto h-fit items-center my-5'>
      {message!=""?<div className='w-fit h-fit absolute p-2 px-5 top-[0px] right-[100px] bg-green-800 border-1 border-black text-[white]'>{message}</div>:null}
        <img src={currentProduct?currentProduct[0].thumbnail:null} className='w-80 h-86 border-black border-1'></img>
        <div className='flex flex-col items-start w-80 h-86 py-3'>
          <span className='font-bold text-[21px]'>{currentProduct?currentProduct[0].title:null}</span>
          <span className='font-bold text-[gray]'>{currentProduct?currentProduct[0].brand:null}</span>
          <span className='font-bold text-[18px]'>${currentProduct?currentProduct[0].price:null}</span>
          <span className='font-bold text-[green]'>{currentProduct?currentProduct[0].availabilityStatus:null}</span>
          <span className='font-bold text-[gray]'>{currentProduct?currentProduct[0].shippingInformation:null}</span>
          <button className='bg-amber-600 w-full mt-2 p-1 font-medium border-1 border-black' onClick={handleAddToCart}>Add to cart</button>
          <span className='text-[18px] font-medium mt-5'>Product Description:</span>
          {/* <span className=''>{currentProduct?currentProduct[0].description:null}</span> */}
          <span className=''>{currentProduct?(moreDescription?<>{currentProduct[0].description}<span onClick={()=>{setMoreDescription(false)}} className='text-indigo-900 font-bold cursor-pointer'>less</span></>:<>{currentProduct[0].description.slice(0,51)}...<span onClick={()=>{setMoreDescription(true)}} className='text-indigo-900 font-bold cursor-pointer'>more</span></>):null}</span>
        </div>
    </div>
  )
}

export default ProductDetail