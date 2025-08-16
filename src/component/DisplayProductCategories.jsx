import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import useFetch from '../utils/useFetch'

function DisplayProductCategories({categoryName,backgColor}) {
    const {data,error,loading}=useFetch("https://dummyjson.com/products");
    if(error)
    {
        return(<div>{error}</div>);
    }
    // if(loading==true)
    // {
    //     return(<div>Loading</div>);
    // }
    function handleExploreMoreProducts(){

    }
    let i=0;
  return (
    <div className='my-10'>
        <div className={`py-5 px-10 w-fit h-fit flex flex-row justify-center items-center border-1 border-black text-white text-[36px] rounded-t-[20px] ${backgColor}`}>{categoryName}</div>
        <div className={`mt-2 p-5 flex flex-wrap items-center justify-evenly gap-2 border-1 border-black ${backgColor} `}>
            {data?.products?.length>=2? data.products.map((item)=>{
                
                if(i<2 && categoryName.toLowerCase()==item.category){
                    i++;
                    return(<ProductCard key={item.id} id={item.id} loading={loading} imgsrc={item.thumbnail} brand={item.brand} title={item.title} avgRating={item.rating} warrantyInfo={item.warrantyInformation} availabilityStatus={item.availabilityStatus} shippingInfo={item.shippingInformation} price={item.price}/>)
                }
                     //<ProductCard loading={loading} brand={data?.products[0].brand}/>
            }): (<><ProductCard loading={loading} /> <ProductCard loading={loading} /></>)
                
            }
        </div>
        <div className={`flex flex-row justify-center items-center py-3 text-[18px] text-black ${backgColor} rounded-b-[20px] border-1 border-black`} onClick={handleExploreMoreProducts}>Explore more products!</div>
    </div>
  );
  
}

export default DisplayProductCategories