import { useState } from "react";
import Navbar from "./Navbar";
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import spacePortLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spacePortPortrait from '../assets/technology/image-spaceport-portrait.jpg';

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const content = [
    {
      title: "LAUNCH VEHICLE",
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. `,
      landscapeImage: launchVehicleLandscape,
      portraitImage: launchVehiclePortrait
    },
    {
      title: "SPACEPORT",
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. `,
      landscapeImage: spacePortLandscape,
      portraitImage: spacePortPortrait
    },
    {
      title: "SPACE CAPSULE",
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. `,
      landscapeImage: spaceCapsuleLandscape,
      portraitImage: spaceCapsulePortrait
    }
  ];

  return (
    <div>
      <div className='technology w-full h-screen bg-cover bg-center'>
        <Navbar />

        <p className='text-center md:text-left md:pl-5 lg:pl-32 text-white pt-16 md:pt-8 lg:pt-16 md:right-60 lg:right-48 font-[Barlo-Condensed-ExtraLight] tracking-wider text-[18px] md:text-[23px]'>
          <span className='font-[Barlo-Condensed-Bold] pr-7 opacity-50'>03</span>SPACE LAUNCH 101
        </p>

        <div className='flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between lg:pl-20 lg:pr-20 lg:pt-20'>
          <div className='lg:w-1/2 lg:pr-10'>
            {/* Desktop Portrait Image */}
            <img 
              src={content[activeIndex - 1].portraitImage} 
              alt={content[activeIndex - 1].title} 
              className="hidden lg:block lg:w-[37rem] lg:ml-80  h-auto object-cover"
            />
            {/* Mobile Landscape Image */}
            <img 
              src={content[activeIndex - 1].landscapeImage} 
              alt={content[activeIndex - 1].title} 
              className="lg:hidden w-full h-auto object-cover pt-20 mx-auto" 
            />
          </div>

          <div className='lg:w-1/2 lg:pl-56 flex flex-col lg:flex-row items-center lg:items-start'>
  <div className='flex flex-row lg:flex-col space-x-2 lg:space-y-4 lg:space-x-0 pt-5 lg:pt-0'>
    {content.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index + 1)}
        className={`w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 rounded-full border-gray-400 border-[0.2px] text-white hover:border-white hover:cursor-pointer ${
          activeIndex === index + 1 ? "bg-white text-amber-950" : ""
        } lg:flex lg:items-center lg:justify-center lg:w-14 lg:h-14`}
      >
        {index + 1}
      </button>
    ))}
  </div>


            <div className="text-center lg:text-left text-white font-[Bellefair-Regular] mt-1 lg:mt-0 lg:pl-16">
              <h1 className="text-lg md:text-2xl lg:text-3xl opacity-50 pt-7 lg:pt-0">THE TERMINOLOGY...</h1>
              <p className="text-2xl md:text-5xl lg:text-6xl pt-3 lg:pt-7">{content[activeIndex - 1].title}</p>
              <p className="font-[Barlo-Regular] text-[15px] md:text-[20px] pt-6 tracking-wide text-[#D0D6F9]">
                {content[activeIndex - 1].description.split('\n').map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
