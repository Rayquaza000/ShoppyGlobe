import React from 'react'
import ProductCard from './ProductCard'

function DisplayProductCategories({categoryName,backgColor}) {
    
  return (
    <div className='my-10'>
        <div className={`py-5 px-10 w-fit h-fit flex flex-row justify-center items-center border-1 border-black text-white text-[36px] rounded-t-[20px] ${backgColor}`}>{categoryName}</div>
        <div className={`mt-2 p-5 flex flex-wrap items-center justify-evenly gap-2 border-1 border-black ${backgColor} `}>
            <ProductCard/>
            <ProductCard/>
        </div>
        <div className={`flex flex-row justify-center items-center py-3 text-[18px] text-black ${backgColor} rounded-b-[20px] border-1 border-black`}>Explore more products!</div>
    </div>
  )
}

export default DisplayProductCategories