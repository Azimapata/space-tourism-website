import { useState } from 'react';
import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import anousheh from '../assets/crew/image-anousheh-ansari.png';
import Navbar from './Navbar';

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState('douglas');

  const crewDetails = {
    douglas: {
      role: 'COMMANDER',
      name: 'DOUGLAS HURLEY',
      description: `Douglas Gerald Hurley is an American engineer, 
      former Marine Corps pilot and former NASA 
      astronaut. He launched into space for the third  
      time as commander of Crew Dragon Demo-2.`,
      image: douglas,
    },
    mark: {
      role: 'MISSION SPECIALIST',
      name: 'MARK SHUTTLEWORTH',
      description: `Mark Richard Shuttleworth is the founder and CEO 
      of Canonical, the company behind the Linux-based 
      Ubuntu operating system. Shuttleworth became the 
      first South African to travel to space as a space tourist.`,
      image: mark,
    },
    victor: {
      role: 'PILOT',
      name: 'VICTOR GLOVER',
      description: `Pilot on the first operational flight of the SpaceX 
      Crew Dragon to the International Space Station. 
      Glover is a commander in the U.S. Navy where 
      he pilots an F/A-18. He was a crew member of 
      Expedition 64, and served as a station systems 
      flight engineer.`,
      image: victor,
    },
    anousheh: {
      role: 'FLIGHT ENGINEER',
      name: 'ANOUSHEH ANSARI',
      description: `Anousheh Ansari is an Iranian American engineer 
      and co-founder of Prodea Systems. Ansari was the 
      fourth self-funded space tourist, the first self-
      funded  woman to fly to the ISS, and the first
       Iranian in space.`,
      image: anousheh,
    },
  };

  const handleToggle = (crew) => {
    setSelectedCrew(crew);
  };

  const { role, name, description, image } = crewDetails[selectedCrew];

  return (
    <div className='crew w-full h-screen bg-cover bg-center overflow-hidden'>
      <Navbar/>

      <p className='text-center lg:text-left lg:pl-28 text-white pt-16 md:pt-8 lg:pt-16 md:relative md:right-60 lg:left-9 md:top-5 font-[Barlo-Condensed-ExtraLight] tracking-wider text-[16px] md:text-[23px] lg:text-[30px]'>
        <span className='font-[Barlo-Condensed-Bold] pr-5 text-[#D0D6F9]'>02</span>MEET YOUR CREW
      </p>

      <div className='text-center text-white lg:flex'>
       
            <div className='pl-0 lg:pl-80 lg:pt-32'>
            <p className="font-[Bellefair-Regular] text-[18px] md:text-[23px] lg:text-[30px] pt-10 lg:pr-64 lg:pt-24 tracking-wider text-[#d1d4e9cb] ">
          {role}
        </p>
        <h1 className="font-[Bellefair-Regular] text-[23px] md:text-[39px] lg:text-[56px]  pt-1 lg:pt-0 text-white">
          {name}
        </h1>

        <p className='font-[Barlo-Regular] text-[14px] md:text-[22px] lg:text-[20px] tracking-wide text-[#D0D6F9] pt-3 lg:pr-10'>
          {description.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </p>

        <div className='flex justify-center space-x-4 lg:space-x-10 pt-16 md:pt-12 lg:pt-32 lg:pr-56'>
          <button onClick={() => handleToggle('douglas')} className={`w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full ${selectedCrew === 'douglas' ? 'bg-white' : 'bg-gray-600'}`}></button>
          <button onClick={() => handleToggle('mark')} className={`w-2.5 md:w-3.5 h-2.5  md:h-3.5 rounded-full ${selectedCrew === 'mark' ? 'bg-white' : 'bg-gray-600'}`}></button>
          <button onClick={() => handleToggle('victor')} className={`w-2.5 md:w-3.5 h-2.5  md:h-3.5 rounded-full ${selectedCrew === 'victor' ? 'bg-white' : 'bg-gray-600'}`}></button>
          <button onClick={() => handleToggle('anousheh')} className={`w-2.5 md:w-3.5 h-2.5  md:h-3.5 rounded-full ${selectedCrew === 'anousheh' ? 'bg-white' : 'bg-gray-600'}`}></button>
        </div>
            </div>
       
        
        <img src={image} alt={name} className='w-52 md:w-96 lg:w-[490px] mx-auto pt-8 lg:pt-9 ' />
      </div>
    </div>
  );
}

export default Crew;




