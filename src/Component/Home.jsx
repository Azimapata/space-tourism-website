import { useState } from 'react';
import displayButtonMobile from '../assets/home/Display Button States - Mobile.svg';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';
// import line from '../assets/home/line.svg'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className='mobile w-full h-screen bg-cover bg-center'>
        <div className='flex justify-between items-end'>
          <img src={logo} alt="Logo" className=' md:w-16 lg:w-11 top-8 md:top-0 lg:top-8 mb-0 md:mb-5 relative ml-5 md:ml-14' /> 

          {/* Hamburger menu for mobile screens */}
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

          {/* Navbar for tablet and desktop screens */}
          <div className='hidden md:flex relative  bg-[#20253eaa] backdrop-blur-lg  px-20 lg:px-28 py-10 lg:py-7  lg:top-8 font-[Barlo-Condensed-ExtraLight] text-[19px] tracking-wider '> 
            {/* Add your navbar code here */}
            {/* <img src={line} alt="" className='hidden lg:flex' /> */}
            <ul className='flex space-x-12 text-white'>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about"><span className='font-[Barlo-Condensed-Bold]  pr-3'>01</span>DESTINATION</a></li>
              <li><a href="#services"><span className='font-[Barlo-Condensed-Bold]  pr-3'>02</span>CREW</a></li>
              <li><a href="#contact"><span className='font-[Barlo-Condensed-Bold]  pr-3'>03</span>TECHNOLOGY</a></li>
            </ul>
          </div>
        </div>

        {/* Conditional Rendering for the Mobile Menu */}
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

            <div className=' flex flex-col lg:flex-row lg:overflow-hidden lg:justify-between'>
            <div className="text-center text-[#D0D6F9] lg:relative lg:top-32 left-20 ">
          <p className="font-[Barlo-Condensed-ExtraLight] text-[18px] md:text-[34px] lg:text-[27px] pt-32 md:pt-28   tracking-wider">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="font-[Bellefair-Regular] text-[86px] md:text-[144px] lg:text-[100px] pt-3 text-white">
            SPACE
          </h1>

          <p className="font-[Barlo-Regular] text-[16px] md:text-[20px] lg:text-[24px]  pb-14 md:pb-32 ">
            <span className="block md:hidden">
              Let’s face it; if you want to go to space, you might <br />
              as well genuinely go to outer space and not hover <br />
              kind of on the edge of it. Well sit back, and relax <br />
              because we’ll give you a truly out of this world <br />
              experience!
            </span>
            <span className="hidden md:block lg:hidden">
              Let’s face it; if you want to go to space, you might as well genuinely go to <br />
              outer space and not hover kind of on the edge of it. Well sit back, and relax <br />
              because we’ll give you a truly out of this world experience!
            </span>
            <span className="hidden lg:block lg:text-[16px]">
              Let’s face it; if you want to go to space, you  might as well genuinely go <br />
               to outer space and   not hover kind of on the edge of it. Well sit  back, <br /> 
               and relax because we’ll give you  a truly out of this world experience!
            </span>
          </p>
        </div>

        <div className='flex justify-center items-center '>
           <img src={displayButtonMobile} alt="Display Button" className='w-36 md:w-72 lg:w-60 lg:right-20 top-32update lg:relative' />
           </div>
            </div>
       
      </div>
    </div>
  );
}

export default Home;
