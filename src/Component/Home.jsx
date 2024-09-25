import displayButtonMobile from '../assets/home/Display Button States - Mobile.svg';
import Navbar from './Navbar';

// Home component that renders the main content of the home page
const Home = () => {
  return (
    <div>
      {/* Full-screen background container for the Home page */}
      <div className='home w-full h-screen bg-cover bg-center'>
      
        {/* Navbar component for navigation links */}
        <Navbar/>

        {/* Main content area arranged in a column on small screens and a row on large screens */}
        <div className='flex flex-col lg:flex-row items-center lg:overflow-hidden lg:justify-between'>
          
          {/* Text container for the heading and paragraph */}
          <div className="text-center text-[#D0D6F9] lg:relative lg:top-44 lg:left-56">
            
            {/* Small subheading */}
            <p className="font-[Barlo-Condensed-ExtraLight] text-[18px] md:text-[34px] lg:text-[32px] pt-32 md:pt-28 tracking-wider lg:pr-11">
              SO, YOU WANT TO TRAVEL TO
            </p>

            {/* Main heading text */}
            <h1 className="font-[Bellefair-Regular] text-[86px] md:text-[144px] lg:text-[140px] pt-3 text-white">
              SPACE
            </h1>

            {/* Paragraph text describing the space travel experience */}
            <p className="font-[Barlo-Regular] text-[16px] md:text-[20px] lg:text-[54px] pb-14 md:pb-32">
              
              {/* Mobile screen paragraph text */}
              <span className="block md:hidden">
                Let’s face it; if you want to go to space, you might <br />
                as well genuinely go to outer space and not hover <br />
                kind of on the edge of it. Well sit back, and relax <br />
                because we’ll give you a truly out of this world <br />
                experience!
              </span>

              {/* Tablet screen paragraph text */}
              <span className="hidden md:block lg:hidden">
                Let’s face it; if you want to go to space, you might as well genuinely go to <br />
                outer space and not hover kind of on the edge of it. Well sit back, and relax <br />
                because we’ll give you a truly out of this world experience!
              </span>

              {/* Desktop screen paragraph text */}
              <span className="hidden lg:block lg:text-[20px]">
                Let’s face it; if you want to go to space, you might as well genuinely go <br />
                to outer space and not hover kind of on the edge of it. Well sit back, <br /> 
                and relax because we’ll give you a truly out of this world experience!
              </span>
            </p>
          </div>

          {/* Container for the circular display button image */}
          <div className='flex justify-center items-center lg:pt-96 lg:pl-96 mx-auto'>
            <img 
              src={displayButtonMobile} 
              alt="Display Button" 
              className='w-36 md:w-72 lg:w-80' // Adjusting the image size based on screen size
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
