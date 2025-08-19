import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const cartItems=useSelector((store)=>store.cart.items);
    const navigate=useNavigate();
    let total=0;
    cartItems?.forEach((item)=>{total=total+(item.price*item.quantity)});
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const regex=/\d/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [incorrectDetails,setIncorrectDetails]=useState(false);
    function handlePlaceOrder(e){
        e.preventDefault();
        if(regex.test(name) || phone.toString().length!=10 || (!email.includes('@') || !email.includes('.') || (email.indexOf('@') > email.lastIndexOf('.'))))
        {
            setIncorrectDetails(true);
        }
        else{
            navigate("/placedorder");
        }
    }
  return (
    <>
    <div className='flex flex-col items-center mx-auto mt-5 w-100'>
        <span className='text-[24px] mb-5 border-t-1 border-b-1 w-full flex flex-row justify-center text-white bg-cyan-950'>CheckOut</span>
        {cartItems?.map((item,index)=>{return(
            <div className='flex flex-row justify-between w-full' key={index}>
                <span className='flex'><span className='font-bold'>{item.title} </span>&nbsp; X &nbsp;<span className='font-bold'> {item.quantity}</span></span>
                <span className='flex'>{item.quantity*item.price}/-</span>
            </div>)
        })}
        <div className='flex flex-row justify-end border-t-1 border-b-1 w-full py-2'>
            <span className='font-bold text-[20px]'>Total Amount: &nbsp;</span><span className='text-[20px]'>{total.toFixed(2)}/-</span>
        </div>
        
    </div>
    <form className='w-100 mx-auto flex flex-col items-center mt-5'>
        <span className='text-[20px] font-bold text-cyan-950'>Billing Information</span>
        <div className='flex flex-col items-between'>
            <label className='my-2'>Name:
            <input type="text" className='border-1 mx-3 rounded-[3px] px-1 py-1' onChange={(e)=>{setName(e.target.value)}} value={name}></input></label>
            <label className='my-2'>E-mail:
                <input type="email" className='border-1 mx-3 rounded-[3px] px-1 py-1' onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
            </label>
            <label className='my-2'>
                Phone:
                <input type="number" className='border-1 mx-3 rounded-[3px] px-1 py-1' onChange={(e)=>{setPhone(e.target.value)}} value={phone}></input>
            </label>
            <label className='my-2'>
                Address:
                <input type="text" className='border-1 mx-3 rounded-[3px] px-1 py-1' onChange={(e)=>{setAddress(e.target.value)}} value={address}></input>
            </label>

            <label className='mt-2'>Choose payment method:</label>
            <select name="payment" id="payment" className='my-3 border-1 border-black'>
            <option value="card">Credit/Debit card</option>
            <option value="UPI">UPI</option>
            <option value="netbanking">netbanking</option>
            <option value="cash">Cash</option>
            </select>

            <input type="button" value="Place Order" className='bg-cyan-950 self-center px-4 py-2 text-white rounded-[3px]' onClick={handlePlaceOrder}></input>
        </div>
        {incorrectDetails?<span className='bg-red-400 text-red-800 mt-3 border-1 border-red-800 px-3'>Enter correct details</span>:null}
    </form>
    </>
  );
}

export default Checkout