import React from 'react'
import reacticon from "../assets/react.svg"

function ProductCard() {
  return (
    <div className='flex flex-row w-125 h-50 bg-white border-1 border-black rounded-[20px]'>
        <div className='flex items-center justify-center rounded-l-[20px] w-80 h-full border-1 border-black'>
        <img src={reacticon} className='rounded-l-[20px] w-40 h-40'></img>
        </div>
        <div className='h-full w-100 p-2 flex flex-col border-1 border-black rounded-r-[20px]'>
            <span className='text-[18px]'>Seagate</span>
            <span className="text-[16px] font-bold">SSD</span>
            <div className='flex flex-row'>
                <span className='w-fit text-[14px] p-0.5 rounded-[5px] border-1 border-black bg-[#ddd9c3] mr-2'>Avg. rating: 2.6</span> 
                <span className='w-fit text-[14px] p-0.5 rounded-[5px] border-1 border-black bg-[#ddd9c3]'>1 Year Warranty</span>
            </div>
            <span className='text-[12px] text-[#948A54]'>In stock</span>
            <span className='text-[12px] text-[#948A54]'>Ships in 3-5 business days</span>
            <span className='text-[18px] font-bold'>$9.99</span>
            <div className='flex flex-row'>
                <div className='w-1/2 h-fit text-center border-black p-0.5 bg-amber-200'>View Details</div>
                <div className='w-1/2 h-fit text-center border-black p-0.5 bg-blue-300 '>Add to Cart</div>
            </div>
        </div>
        
            
        
    </div>
  )
}

export default ProductCard