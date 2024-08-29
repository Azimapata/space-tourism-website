import displayButtonMobile from '../assets/home/Display Button States - Mobile.png'

const Home = () => {
  return (
    <div  >
   <div className="mobile  text-center text-[#D0D6F9]  w-full h-screen bg-cover bg-center">
   <p className="] font-[Barlo-Condensed-ExtraLight] text-[18px] pt-24 tracking-wider">SO, YOU WANT TO TRAVEL TO </p>
   <h1 className="font-[Bellefair-Regular] text-[86px] pt-3 text-white">SPACE</h1>

   <p className="font-[Barlo-Regular] text-[16px]">Let’s face it; if you want to go to space, you might <br />
    as well genuinely go to outer space and not hover <br />
     kind of on the edge of it. Well sit back, and relax <br />
     because we’ll give you a truly out of this world <br />
      experience!</p>

    <img src={displayButtonMobile} alt="" className='mx-auto pt-28' />  
   </div>
      
    </div>
  )
}

export default Home