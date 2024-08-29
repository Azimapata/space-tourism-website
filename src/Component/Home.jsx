import displayButtonMobile from '../assets/home/Display Button States - Mobile.png'

const Home = () => {
  return (
    <div  >
   <div className="mobile  text-center text-[#D0D6F9]  w-full h-screen bg-cover bg-center">
   <p className="] font-[Barlo-Condensed-ExtraLight] text-[18px] md:text-[34px] pt-32 md:pt-64 tracking-wider">SO, YOU WANT TO TRAVEL TO </p>
   <h1 className="font-[Bellefair-Regular] text-[86px] md:text-[144px] pt-3 text-white">SPACE</h1>

  <p className="font-[Barlo-Regular] text-[16px] md:text-[20px] lg:text-[24px] pt-3">
  {/* Mobile (default) */}
  <span className="block md:hidden">
    Let’s face it; if you want to go to space, you might <br />
    as well genuinely go to outer space and not hover <br />
    kind of on the edge of it. Well sit back, and relax <br />
    because we’ll give you a truly out of this world <br />
    experience!
  </span>

  {/* Tablet */}
  <span className="hidden md:block lg:hidden">
    Let’s face it; if you want to go to space, you might as well genuinely go to 
    <br />outer space and not hover kind of on the edge of it.  Well sit back, and relax 
    <br /> because  we’ll give you a truly out of this world experience!
  </span>

  {/* Desktop */}
  <span className="hidden lg:block">
    Let’s face it; if you want to go to space, you <br />
    might as well genuinely go to outer space and <br />
    not hover kind of on the edge of it. Well sit <br />
    back, and relax because we’ll give you <br />
    a truly out of this world experience!
  </span>
</p>

    <img src={displayButtonMobile} alt="" className='mx-auto pt-28 md:pt-24 w-36 md:w-72' />  
   </div>
      
    </div>
  )
}

export default Home