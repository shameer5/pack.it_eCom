import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

const Navbar = () => {
    const[toggle,setToggle] = useState(false)
    let history = useHistory()
    const location = useLocation()
    const {pathname} = location;
    const cart_items = useSelector((state)=> state.carts.cart)
    
    return (
        <>
        <div className="hidden md:grid visible  w-screen h-20 grid-cols-3 items-center">
         <h1 className="ml-5 text-new-100 font-poppins font-bold text-4xl">pack.It</h1>
         <div className="flex justify-around uppercase font-poppins text-lg">
            <span className={`cursor-pointer ${pathname === "/" && `border-b-4 border-new-100`}`} onClick={()=> history.push('/')}>Home</span>
            <span className={`cursor-pointer ${pathname === "/orders" && `border-b-4 border-new-100`}`} onClick={()=> history.push('/orders')}>Orders</span>
            <span className={`cursor-pointer ${pathname === "/cart" && `border-b-4 border-new-100`}`} onClick={()=> history.push('/cart')}>Cart({cart_items? cart_items.total_items : '0'})</span>
         </div>
         <div className="flex font-poppins justify-end items-center mr-5">
            <button className="border-new-100 rounded-full border-2 py-2 px-3 uppercase tracking-wider hover:text-white hover:bg-new-100 ">Log in</button>
            <button className="border-new-100 rounded-full border-2 py-2 px-3 ml-2 mr-5 uppercase tracking-wider hover:text-white hover:bg-new-100">Sign up</button>
         </div>
        </div>
        <div className="w-screen h-20 grid grid-cols-2 items-center md:hidden">
        <h1 className="ml-5 text-new-100 font-poppins font-bold text-4xl">pack.It</h1>
         <div className="flex justify-end mr-5">
         {!toggle ?(
         <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>(setToggle(!toggle))}>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
         </svg>) : (
         <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>(setToggle(!toggle))}>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
         </svg>
         )
         }
         </div>
        </div>
        <div className="overflow-hidden md:hidden">
        <ul className={`flex justify-around w-screen items-center h-20 transition transform ease-in-out duration-700 font-poppins ${!toggle ?`-translate-y-20 `:`translate-y-0`}`}>
            <li className={`hover:text-new-100 cursor-pointer ${pathname === "/" && `border-b-4 border-new-100`}`} onClick={()=> history.push('/')} >Home</li>
            <li className={`hover:text-new-100 cursor-pointer ${pathname === "/cart" && `border-b-4 border-new-100`}`} onClick={()=> history.push('/cart')} >Cart({cart_items? cart_items.total_items : '0'})</li>
            <li className={`hover:text-new-100 cursor-pointer ${pathname === "/orders" && `border-b-4 border-new-100`}`} onClick={()=> history.push('/orders')} >Orders</li>
            <li className={`hover:text-new-100 cursor-pointer`}>Login</li>
            <li className={`hover:text-new-100 cursor-pointer`}>Sign up</li>
         </ul>
        </div>
        </>
    )
}

export default Navbar
