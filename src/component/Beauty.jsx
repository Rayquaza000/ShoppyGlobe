import React from 'react'
import useFetch from '../utils/useFetch'
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

function Beauty() {
  const {data,loading,error}=useFetch("https://dummyjson.com/products");
  return (
    <div className='flex flex-col items-start mt-5'>
        
        <span className='text-[24px] font-bold m-5'>Beauty Products:</span>
        <div className='flex flex-wrap justify-around px-10'>
        {data?.products?.map((item,index)=>{
          if(item.category=="beauty")
          {
            return(<ProductCard key={item.id} id={item.id} loading={loading} imgsrc={item.thumbnail} brand={item.brand} title={item.title} avgRating={item.rating} warrantyInfo={item.warrantyInformation} availabilityStatus={item.availabilityStatus} shippingInfo={item.shippingInformation} price={item.price}/>);
          }
        })}  
        </div>  
    </div>
  )
}

export default Beauty