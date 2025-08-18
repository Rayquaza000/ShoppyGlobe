import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addItem, setCount, setCart } from './utils/cartSlice'
function App() {
  const cartItems=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();
useEffect(() => {
  const storedItems = localStorage.getItem("cartItems");
  const storedCount = localStorage.getItem("cartCount");

  if (storedItems!=null && storedItems!=undefined) {
    dispatch(setCart({
      items: JSON.parse(storedItems),
      count: storedCount ? parseInt(storedCount) : 0
    }));
  }
}, [dispatch]);
  
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default App
