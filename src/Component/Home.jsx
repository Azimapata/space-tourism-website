import displayButtonMobile from '../assets/home/Display Button States - Mobile.svg';
import Navbar from './Navbar';

const Home = () => {
 

  return (
    <div>
      <div className='home w-full h-screen bg-cover bg-center'>
      
      <Navbar/>

        <div className='flex flex-col lg:flex-row items-center lg:overflow-hidden lg:justify-between'>
          <div className="text-center text-[#D0D6F9] lg:relative lg:top-44 lg:left-56">
            <p className="font-[Barlo-Condensed-ExtraLight] text-[18px] md:text-[34px] lg:text-[32px] pt-32 md:pt-28 tracking-wider lg:pr-11">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="font-[Bellefair-Regular] text-[86px] md:text-[144px] lg:text-[140px] pt-3 text-white">
              SPACE
            </h1>

            <p className="font-[Barlo-Regular] text-[16px] md:text-[20px] lg:text-[54px] pb-14 md:pb-32">
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
              <span className="hidden lg:block lg:text-[20px]">
                Let’s face it; if you want to go to space, you might as well genuinely go <br />
                to outer space and not hover kind of on the edge of it. Well sit back, <br /> 
                and relax because we’ll give you a truly out of this world experience!
              </span>
            </p>
          </div>

          <div className='flex justify-center items-center lg:pt-96 lg:pl-96  mx-auto'>
            <img src={displayButtonMobile} alt="Display Button" className='w-36 md:w-72 lg:w-80 ' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
