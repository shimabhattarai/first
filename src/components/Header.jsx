import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const Location =useLocation();
  const isActive =(path)=>{
    return Location.pathname===path
    ?"text-red-500 front-semibold border-b border-red-500 w-fit":""
  }
  return (
    <header> 
    <nav className=' w-full flex  bg-blue-600 text-black p-4 fixes top-0'>
      <h1 className=' w-[50%] flex justify-start ml-4 font-semibold text-sm text-red-700'>
    
        Seema
      </h1>

      <div className=' w-[50%]  Flex justify-center flex gap-4'>
        <Link to="/" className={`font-semibold text-md text-red-700 hover:text-red-700 
         hover:border-b-2 ${isActive("/home")} `}>
          Home</Link>
        <Link to="/about" className= {`font-semibold text-md text-red-700 hover:text-red-700 
         hover:border-b-2 ${isActive("/about")}`}>
          About</Link>
        <Link to="/service" className= {`font-semibold text-md text-red-700 hover:text-red-700 
         hover:border-b-2 ${isActive("/service")}`}>
          Service</Link>
        <Link to="/contact"className= {`font-semibold text-md text-red-700 hover:text-red-700 
         hover:border-b-2 ${"/contact"}`}>
          Contact</Link>
          <Link to="/profile" className= {`font-semibold text-md text-red-700 hover:text-red-700 
         hover:border-b-2 ${isActive("/profile")}`}>
          Profile</Link>
      </div>
    </nav>
  </header>
  )
}

export default Header