import React from 'react'
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav class='w-full h-14 pt-[10px] bg-black-400 flex justify-between items-center md:px-4'>
        <div class='text-3xl font-bold mt-[20px]  '>
            <img src={Logo} alt="my-logo" />
        </div>
        <ul class='hidden font-bold text-yellow-700 md:flex '>
            <li class='mx-[20px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>
            <Link to='/home'>
          _Hello
        </Link></li>
        <li class='mx-[20px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>
            <Link to='/about'>
          _About
        </Link></li>
            <li class='mx-[20px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>
            <Link to='/projects'>
          _Projects
        </Link>
            </li>
            <li class='mx-[20px] text-2xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...'>
            <Link to="/contact">
          _Get In Touch
        </Link>
            </li>
        </ul>
       
         <div class='md:hidden text-yellow-700'>
           <a class='text-4xl'href='#'>&#8801;</a> 
         </div>
    </nav>
  )
}

export default Navbar;


