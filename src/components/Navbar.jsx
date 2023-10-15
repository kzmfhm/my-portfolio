import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };


  const handlePageClose = () => {
  
  };
  return (
    <nav className={`w-full h-14 pt-[10px] bg-black-400 flex justify-between items-center md:px-4 ${showMobileMenu ? 'mt-[0px]' : ''}`}>
       <div className="text-3xl font-bold mt-[20px] sticky top-0">
       <NavLink to="/" onClick={handlePageClose}>
          <img src={Logo} alt="my-logo" />
        </NavLink>
      </div>
      <div className={`md:hidden text-yellow-700 ${showMobileMenu ? 'hidden' : 'ml-[0px]'}`}>
        <a className="text-4xl mr-[20px] menu-icons" href="#" onClick={toggleMobileMenu}>
          &#8801;
        </a>
      </div>
      <ul
        className={`font-bold text-yellow-700 md:flex ${
          showMobileMenu ? 'grid' : 'hidden'
        } md:block`}
      >
        <li
          className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ${
            showMobileMenu ? 'text-sm mr-[0px]' : ''
          }`}
        >
          <Link to="/home" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? 'md:hover:bg-[#111]' : ''}`} onClick={closeMobileMenu}>
            _Hello
          </Link>
        </li>
        <li
          className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ${
            showMobileMenu ? 'text-sm mr-[0px]' : ''
          }`}
        >
          <Link to="/about" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? 'md:hover:bg-[#111]' : ''}`} onClick={closeMobileMenu}>
            _About
          </Link>
        </li>
        <li
          className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ${
            showMobileMenu ? 'text-sm mr-[0px]' : ''
          }`}
        >
          <Link to="/projects" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? 'md:hover:bg-[#111]' : ''}`} onClick={closeMobileMenu}>
            _Projects
          </Link>
        </li>
        <li
          className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ${
            showMobileMenu ? 'text-sm mr-[0px]' : ''
          }`}
        >
          <Link to="/contact" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? 'md:hover:bg-[#111]' : ''}`} onClick={closeMobileMenu}>
            _Get In Touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
