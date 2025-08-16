import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'

function ProductDetail() {
  const params=useParams()
  const [currentProduct,setCurrentProduct]=useState(null);
  const {data,loading,error}=useFetch("https://dummyjson.com/products");
  const [moreDescription,setMoreDescription]=useState(false);
  useEffect(()=>{
    if(data){
    setCurrentProduct(data.products.filter((item)=>item.id==params.id));
    }
  },[data])
  
  return (
    <div className='flex flex-col mx-auto h-fit items-center my-5'>
        <img src={currentProduct?currentProduct[0].thumbnail:null} className='w-80 h-86 border-black border-1'></img>
        <div className='flex flex-col items-start w-80 h-86 py-3'>
          <span className='font-bold text-[21px]'>{currentProduct?currentProduct[0].title:null}</span>
          <span className='font-bold text-[gray]'>{currentProduct?currentProduct[0].brand:null}</span>
          <span className='font-bold text-[18px]'>${currentProduct?currentProduct[0].price:null}</span>
          <span className='font-bold text-[green]'>{currentProduct?currentProduct[0].availabilityStatus:null}</span>
          <span className='font-bold text-[gray]'>{currentProduct?currentProduct[0].shippingInformation:null}</span>
          <button className='bg-amber-600 w-full mt-2 p-1 font-medium border-1 border-black'>Add to cart</button>
          <span className='text-[18px] font-medium mt-5'>Product Description:</span>
          {/* <span className=''>{currentProduct?currentProduct[0].description:null}</span> */}
          <span className=''>{currentProduct?(moreDescription?<>{currentProduct[0].description}<span onClick={()=>{setMoreDescription(false)}} className='text-indigo-900 font-bold cursor-pointer'>less</span></>:<>{currentProduct[0].description.slice(0,51)}...<span onClick={()=>{setMoreDescription(true)}} className='text-indigo-900 font-bold cursor-pointer'>more</span></>):null}</span>
        </div>
    </div>
  )
}

export default ProductDetail