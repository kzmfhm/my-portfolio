import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.svg';
import './style.css';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className={`w-full h-14 pt-2 bg-black-400 flex justify-between items-center md:px-4 ${showMobileMenu ? 'mt-0' : ''}`}>
      <div className="text-3xl font-bold mt-2 sticky top-0">
        <NavLink to="/" onClick={closeMobileMenu}>
          <img src={Logo} alt="my-logo" />
        </NavLink>
      </div>
      <div className={`md:hidden text-yellow-700 ${showMobileMenu ? 'hidden' : 'ml-0'}`}>
        <button className="text-4xl mr-2 menu-icons" onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>
      <ul className={`font-bold text-yellow-700 md:flex ${showMobileMenu ? 'grid' : 'hidden'} md:block`}>
        <NavItem to="/home" text="_Hello" closeMobileMenu={closeMobileMenu} showMobileMenu={showMobileMenu} />
        <NavItem to="/about" text="_About" closeMobileMenu={closeMobileMenu} showMobileMenu={showMobileMenu} />
        <NavItem to="/projects" text="_Projects" closeMobileMenu={closeMobileMenu} showMobileMenu={showMobileMenu} />
        <NavItem to="/contact" text="_Get In Touch" closeMobileMenu={closeMobileMenu} showMobileMenu={showMobileMenu} />
      </ul>
    </nav>
  );
};

const NavItem = ({ to, text, closeMobileMenu, showMobileMenu }) => (
  <li
    className={`mx-2 text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ${
      showMobileMenu ? 'text-sm mr-0' : ''
    }`}
  >
    <NavLink
      to={to}
      className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? 'md:hover:bg-[#111]' : ''}`}
      onClick={closeMobileMenu}
    >
      {text}
    </NavLink>
  </li>
);

export default Navbar;
