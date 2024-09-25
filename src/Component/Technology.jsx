import { useState } from "react";
import Navbar from "./Navbar";
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import spacePortLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spacePortPortrait from '../assets/technology/image-spaceport-portrait.jpg';

const Technology = () => {
  // State to keep track of the currently active technology index (1-based index).
  const [activeIndex, setActiveIndex] = useState(1);

  // Array containing information about each technology option.
  const content = [
    {
      title: "LAUNCH VEHICLE",
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.`,
      landscapeImage: launchVehicleLandscape, // Image for mobile and tablet views
      portraitImage: launchVehiclePortrait // Image for desktop views
    },
    {
      title: "SPACEPORT",
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft.`,
      landscapeImage: spacePortLandscape,
      portraitImage: spacePortPortrait
    },
    {
      title: "SPACE CAPSULE",
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings.`,
      landscapeImage: spaceCapsuleLandscape,
      portraitImage: spaceCapsulePortrait
    }
  ];

  return (
    <div>
      {/* Container for the entire Technology section with full-screen height */}
      <div className='w-full h-screen bg-center bg-cover technology'>
        {/* Navbar Component */}
        <Navbar />

        {/* Page Header with section number and title */}
        <p className='text-center md:text-left md:pl-5 lg:pl-32 text-white pt-16 md:pt-8 lg:pt-16 md:right-60 lg:right-48 font-[Barlo-Condensed-ExtraLight] tracking-wider text-[18px] md:text-[23px]'>
          <span className='font-[Barlo-Condensed-Bold] pr-7 opacity-50'>03</span>SPACE LAUNCH 101
        </p>

        {/* Main Content Wrapper */}
        <div className='flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between lg:pl-20 lg:pr-20 lg:pt-20'>
          <div className='lg:w-1/2 lg:pr-10'>
            {/* Image for desktop view - Portrait */}
            <img 
              src={content[activeIndex - 1].portraitImage} 
              alt={content[activeIndex - 1].title} 
              className="hidden lg:block lg:w-[37rem] lg:ml-80 h-auto object-cover"
            />
            {/* Image for mobile view - Landscape */}
            <img 
              src={content[activeIndex - 1].landscapeImage} 
              alt={content[activeIndex - 1].title} 
              className="object-cover w-full h-auto pt-20 mx-auto lg:hidden" 
            />
          </div>

          {/* Text and Navigation Buttons */}
          <div className='flex flex-col items-center lg:w-1/2 lg:pl-56 lg:flex-row lg:items-start'>
            {/* Navigation buttons for different technology options */}
            <div className='flex flex-row pt-5 space-x-2 lg:flex-col lg:space-y-4 lg:space-x-0 lg:pt-0'>
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index + 1)} // Update active index on button click
                  className={`w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 rounded-full border-gray-400 border-[0.2px] text-white hover:border-white hover:cursor-pointer ${
                    activeIndex === index + 1 ? "bg-white text-amber-950" : ""
                  } lg:flex lg:items-center lg:justify-center lg:w-14 lg:h-14`}
                >
                  {index + 1} {/* Button label showing the option number */}
                </button>
              ))}
            </div>

            {/* Information about the selected technology */}
            <div className="text-center lg:text-left text-white font-[Bellefair-Regular] mt-1 lg:mt-0 lg:pl-16">
              {/* Subheading */}
              <h1 className="text-lg opacity-50 md:text-2xl lg:text-3xl pt-7 lg:pt-0">THE TERMINOLOGY...</h1>
              {/* Title of the selected technology */}
              <p className="pt-3 text-2xl md:text-5xl lg:text-6xl lg:pt-7">{content[activeIndex - 1].title}</p>
              {/* Description of the selected technology */}
              <p className="font-[Barlo-Regular] text-[15px] md:text-[20px] pt-6 tracking-wide text-[#D0D6F9]">
                {/* Split description into multiple lines with <br /> tags */}
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
