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
      description: ``,
      distance: '384,400 KM',
      travelTime: '3 DAYS',
    },
    Mars: {
      image: Mars,
      name: 'MARS',
      description: `
`,
      distance: '225 MIL. KM',
      travelTime: '9 MONTHS',
    },
    Europa: {
      image: Europa,
      name: 'EUROPA',
      description: ``,
      distance: '628 MIL. KM',
      travelTime: '3 YEARS',
    },
    Titan: {
      image: Titan,
      name: 'TITAN',
      description: ``,
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

        <p className='text-center lg:text-left lg:pl-28 text-white pt-16 md:pt-8 lg:pt-16 md:right-60  font-[Barlo-Condensed-ExtraLight] tracking-wider text-[18px] md:text-[23px]'>
          <span className='font-[Barlo-Condensed-Bold] pr-7 opacity-50'>01</span>PICK YOUR DESTINATION
        </p>


          <div className='lg:flex'>
               <div>
        <img src={destinations[selectedDestination].image} alt={selectedDestination} className='mx-auto w-36 md:w-96  pt-10 lg:pt-20 lg:ml-52' />
        </div>
        
        <div className='lg:pl-10'>
            
        <div className='pt-7 lg:pt-24 text-[16px] md:text-[24px] lg:text-[16px] font-[Barlo-Condensed-ExtraLight] tracking-wider'>
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
          <div className='flex flex-col md:flex-row md:pt-6 mx-auto md:pl-56 lg:pl-12'>
          <p className='flex flex-col font-[Bellefair-Regular] text-[28px]  md:text-[36px] lg:text-[23px]'>
            <span className='font-[Barlo-Condensed-ExtraLight] tracking-widest text-[16px] text-[#D0D6F9]'>AVG. DISTANCE</span>
            {destinations[selectedDestination].distance}
          </p>
          <p className='flex flex-col font-[Bellefair-Regular] text-[28px] md:text-[36px] lg:text-[23px] md:pl-20'>
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
