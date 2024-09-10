import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className='flex justify-between items-end'>
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo" 
          className='md:w-16 lg:w-14 top-8 md:top-0 lg:top-8 mb-0 md:mb-5 relative ml-5 md:ml-14' 
        /> 

        {/* Hamburger Menu Icon for Mobile */}
        <div className='block md:hidden'>
          {!menuOpen && (
            <img
              src={hamburger}
              alt="Menu Icon"
              className='mr-9 top-4 relative cursor-pointer'
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex relative backdrop-blur-3xl border-[0.3px] border-transparent px-20 lg:px-56 py-10 lg:py-7 lg:top-8 font-[Barlo-Condensed-ExtraLight] text-[19px] tracking-wider'> 
          <ul className='flex space-x-12 text-white'>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'border-b-2 border-white pb-2' : ''}
              >
                <span className='font-[Barlo-Condensed-Bold] pr-3'>00</span>HOME
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/destination" 
                className={({ isActive }) => isActive ? 'border-b-2 border-white pb-2' : ''}
              >
                <span className='font-[Barlo-Condensed-Bold] pr-3'>01</span>DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/crew" 
                className={({ isActive }) => isActive ? 'border-b-2 border-white pb-2' : ''}
              >
                <span className='font-[Barlo-Condensed-Bold] pr-3'>02</span>CREW
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/technology" 
                className={({ isActive }) => isActive ? 'border-b-2 border-white pb-2' : ''}
              >
                <span className='font-[Barlo-Condensed-Bold] pr-3'>03</span>TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#0B0D17] backdrop-blur-lg bg-opacity-55 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out w-2/3`}
      >
        {/* Close Icon */}
        <img
          src={closeIcon}
          alt="Close Icon"
          className='absolute top-12 right-6 cursor-pointer'
          onClick={toggleMenu}
        />

        {/* Mobile Navigation Links */}
        <ul className='text-white space-y-5 mt-32 ml-8 font-[Barlo-Condensed-ExtraLight] text-[18px] tracking-widest relative'>
          <li className='relative'>
            <NavLink 
              to="/" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? 'border-r-4 border-white pr-6'
                  : 'pl-4 pr-3'
              }
            >
              <span className='font-[Barlo-Condensed-Bold] pl-4 pr-3'>00</span>HOME
            </NavLink>
          </li>
          <li className='relative'>
            <NavLink 
              to="/destination" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? 'border-r-4 border-white pr-6'
                  : 'pl-4 pr-3'
              }
            >
              <span className='font-[Barlo-Condensed-Bold] pl-4 pr-3'>01</span>DESTINATION
            </NavLink>
          </li>
          <li className='relative'>
            <NavLink 
              to="/crew" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? 'border-r-4 border-white pr-6'
                  : 'pl-4 pr-3'
              }
            >
              <span className='font-[Barlo-Condensed-Bold] pl-4 pr-3'>02</span>CREW
            </NavLink>
          </li>
          <li className='relative'>
            <NavLink 
              to="/technology" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                isActive 
                  ? 'border-r-4 border-white pr-6'
                  : 'pl-4 pr-3'
              }
            >
              <span className='font-[Barlo-Condensed-Bold] pl-4 pr-3'>03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
