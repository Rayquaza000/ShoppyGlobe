import React from 'react'
import DisplayProductCategories from './DisplayProductCategories'

function Home() {
  return (
    <div className='px-10 py-10 my-5'>
        <span className='bg-[#595959] text-white py-5 px-8 text-[24px] rounded-[10px] border-1 border-black'>Browse products by categories:</span>
        <DisplayProductCategories categoryName={"Beauty"} backgColor={"bg-[#E6B9B8]"} hoverColor={"hover:bg-[#9e3a38]"}/>
        <DisplayProductCategories categoryName={"Fragrances"} backgColor={"bg-[#B9CDE5]"} hoverColor={"hover:bg-[#3a669c]"}/>
        <DisplayProductCategories categoryName={"Furniture"} backgColor={"bg-[#ddb892]"} hoverColor={"hover:bg-[#8f5e2d]"}/>
        <DisplayProductCategories categoryName={"Groceries"} backgColor={"bg-[#c3d69b]"} hoverColor={"hover:bg-[#77943c]"}/>
    </div>
  )
}   

export default Home