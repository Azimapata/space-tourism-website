import { useState } from 'react';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <div >
    <div className='flex justify-between items-end'>
      <img src={logo} alt="Logo" className='md:w-16 lg:w-11 top-8 md:top-0 lg:top-8 mb-0 md:mb-5 relative ml-5 md:ml-14' /> 

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

      <div className='hidden md:flex relative bg-[#363747] backdrop-blur-3xl px-20 lg:px-28 py-10 lg:py-7 lg:top-8 font-[Barlo-Condensed-ExtraLight] text-[19px] tracking-wider'> 
        <ul className='flex space-x-12 text-white'>
          <li><a href="#home"><span className='font-[Barlo-Condensed-Bold] pr-3'>00</span>HOME</a></li>
          <li><a href="#about"><span className='font-[Barlo-Condensed-Bold] pr-3'>01</span>DESTINATION</a></li>
          <li><a href="#services"><span className='font-[Barlo-Condensed-Bold] pr-3'>02</span>CREW</a></li>
          <li><a href="#contact"><span className='font-[Barlo-Condensed-Bold] pr-3'>03</span>TECHNOLOGY</a></li>
        </ul>
      </div>
    </div>

    <div
      className={`fixed top-0 right-0 h-full bg-[#0B0D17] backdrop-blur-lg bg-opacity-55 transform ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out w-2/3`}
    >
      <img
        src={closeIcon}
        alt="Close Icon"
        className='absolute top-12 right-6 cursor-pointer'
        onClick={toggleMenu}
      />

      <ul className='text-white space-y-5 mt-32 ml-8 font-[Barlo-Condensed-ExtraLight] text-[18px] tracking-widest'>
        <li><a href="#home" onClick={toggleMenu}><span className='font-[Barlo-Condensed-Bold] pl-4 pr-3'>00</span>HOME</a></li>
        <li><a href="#about" onClick={toggleMenu}><span className='font-[Barlo-Condensed-Bold] pl-4 pr-3'>01</span>DESTINATION</a></li>
        <li><a href="#services" onClick={toggleMenu}><span className='font-[Barlo-Condensed-Bold] pl-4 pr-3'>02</span>CREW</a></li>
        <li><a href="#contact" onClick={toggleMenu}><span className='font-[Barlo-Condensed-Bold] pl-4 pr-3'>03</span>TECHNOLOGY</a></li>
      </ul>
    </div>

  </div>
  )
}

export default Navbar