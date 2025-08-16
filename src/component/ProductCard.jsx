import React from 'react'
import reacticon from "../assets/react.svg"
import { Navigate, useNavigate } from 'react-router-dom'

function ProductCard({id,loading,imgsrc,brand,title,avgRating,warrantyInfo,availabilityStatus,shippingInfo,price}) {
    const navigate=useNavigate();
    function handleViewDetails(){
        navigate('./'+id.toString());
    }
    function handleAddToCart(){

    }

  return (
    <div className='flex flex-row w-125 h-50 bg-white border-1 border-black rounded-[20px]'>

        {loading?<span className='self-center mx-auto font-bold text-neutral-500'> Loading data... </span> :
        <>
        <div className='flex items-center justify-center rounded-l-[20px] w-80 h-full border-1 border-black'>
        <img src={imgsrc} className='rounded-l-[20px] w-40 h-40'></img>
        </div>
        <div className='h-full w-100 p-2 flex flex-col border-1 border-black rounded-r-[20px]'>
            <span className='text-[18px]'>{brand}</span>
            <span className="text-[16px] font-bold">{title}</span>
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