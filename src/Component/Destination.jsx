import { useState } from 'react';
import Navbar from './Navbar';  
import Moon from '../assets/destination/image-moon.png';
import Mars from '../assets/destination/image-mars.png';
import Europa from '../assets/destination/image-europa.png';
import Titan from '../assets/destination/image-titan.png';

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState('Moon');

  const destinations = {
    Moon: {
      image: Moon,
      name: 'MOON',
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      distance: '384,400 KM',
      travelTime: '3 DAYS',
    },
    Mars: {
      image: Mars,
      name: 'MARS',
      description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
`,
      distance: '225 MIL. KM',
      travelTime: '9 MONTHS',
    },
    Europa: {
      image: Europa,
      name: 'EUROPA',
      description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      distance: '628 MIL. KM',
      travelTime: '3 YEARS',
    },
    Titan: {
      image: Titan,
      name: 'TITAN',
      description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      distance: '1.2 BIL. KM',
      travelTime: '7 YEARS',
    }
  };

  const handleClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div>
      <div className='destination w-full h-screen bg-cover bg-center'>
        <Navbar/>

        <p className='text-center text-white pt-16 md:pt-8 md:right-60 relative font-[Barlo-Condensed-ExtraLight] tracking-wider text-[18px] md:text-[23px]'>
          <span className='font-[Barlo-Condensed-Bold] pr-7 opacity-50'>01</span>PICK YOUR DESTINATION
        </p>


          <div>
               <div>
        <img src={destinations[selectedDestination].image} alt={selectedDestination} className='mx-auto w-36 md:w-96 pt-10' />
        </div>
        
        <div>
            
        <div className='pt-7 text-[16px] md:text-[24px] font-[Barlo-Condensed-ExtraLight] tracking-wider'>
          <ul className='flex space-x-8 text-white justify-center'>
            {Object.keys(destinations).map((destination) => (
              <li 
                key={destination} 
                className={`cursor-pointer ${selectedDestination === destination ? 'border-b-2 border-white' : ''}`}
              >
                <button 
                  onClick={() => handleClick(destination)} 
                  className='focus:outline-none pb-2'
                >
                  {destination.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className='text-white text-center'>
          <h1 className='font-[Bellefair-Regular] text-[50px] md:text-[80px] pt-4'>{destinations[selectedDestination].name}</h1>
          <p className="font-[Barlo-Regular] text-[16px] text-[#D0D6F9]">
            {destinations[selectedDestination].description.split('<br />').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
          <hr className='w-10/12 md:w-1/2 my-4 mx-auto border-[#979797] opacity-50 md:mt-12' />
          <div className='flex flex-col md:flex-row md:pt-6 mx-auto md:pl-56'>
          <p className='flex flex-col font-[Bellefair-Regular] text-[28px]  md:text-[36px]'>
            <span className='font-[Barlo-Condensed-ExtraLight] tracking-widest text-[16px] text-[#D0D6F9]'>AVG. DISTANCE</span>
            {destinations[selectedDestination].distance}
          </p>
          <p className='flex flex-col font-[Bellefair-Regular] text-[28px] md:text-[36px] md:pl-20'>
            <span className='font-[Barlo-Condensed-ExtraLight] tracking-widest text-[16px] text-[#D0D6F9]'>EST. TRAVEL TIME</span>
            {destinations[selectedDestination].travelTime}
          </p>
          </div>
         
        </div>
        </div>
          </div>

     
    
      </div>
    </div>
  );
}

export default Destination;
