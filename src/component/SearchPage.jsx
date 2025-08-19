import React from 'react'
import useFetch from '../utils/useFetch'
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

function SearchPage() {
    const {searchValue}=useParams();
    const {data,loading,error}=useFetch("https://dummyjson.com/products");
    const filteredData=data?.products?.filter((item,index)=>item.title?.toLowerCase().includes(searchValue.toLowerCase()) || item.brand?.toLowerCase().includes(searchValue.toLowerCase())||item.category.toLowerCase()==searchValue.toLowerCase()
    );
  return (
    <>
    <span className='mt-5 text-[24px] mx-10'>Search results for {searchValue}:</span>
    <div className='flex flex-wrap'>
        {filteredData?.length>0?
            filteredData?.map((item,index)=>{
                return <ProductCard key={item.id} id={item.id} loading={loading} imgsrc={item.thumbnail} brand={item.brand} title={item.title} avgRating={item.rating} warrantyInfo={item.warrantyInformation} availabilityStatus={item.availabilityStatus} shippingInfo={item.shippingInformation} price={item.price}/>
            }):<div className='font-[20px] mt-3 mx-10'>No results found</div>
        }
    </div>
    </>
  )
}

export default SearchPage