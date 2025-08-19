import React from 'react'
import { Navigate, useRouteError } from 'react-router-dom';
import error from "../assets/error.webp";
import { useNavigate } from 'react-router-dom';
function ErrorPath() {
  const navigate=useNavigate();
  const err=useRouteError();
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='flex flex-col items-center justify-center bg-red-400 border-2 border-red-700 text-red-800 font-bold w-full h-full'>
      <span className='text-[24px] text-black'>Oops!Wrong path</span>
      <span className='text-[60px]'>{err.status}</span>
      <span>{err.data}</span>
      
    </div>
    <img src={error} className='w-60 h-60'></img>
      <span className='text-white bg-violet-950 px-4 py-2 my-5 border-2 border-black' onClick={()=>{navigate("/")}}>Go back to Home page</span>
    </div>
  )
}

export default ErrorPath