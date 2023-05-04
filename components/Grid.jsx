import React,{useState} from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const GridItem = ({ image, hostName, location, showName, date }) => {
  const [hovered, setHovered] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const handlePlayButtonClick = () => {
    setFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setFullscreen(false);
  };

  return (
    <div
      className="bg-transparent h-[44vh] w-auto flex-col border-x border-y border-white items-center align-middle hover:border-f4a-green py-4 relative max-h-96 rounded-3xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image src={image} alt="/" layout="fill" objectFit="cover" />
      {!hovered && (
        <div className="absolute inset-0 flex flex-col place-items-start justify-end pl-[6%] mb-[4%]">
          <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm font-thin font-Anton">
            {location}
          </p>
          <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm font-semibold font-Anton">
            {showName}
          </p>
          <p className="text-white text-xs sm:text-sm md:text-xs lg:text-sm font-semibold font-Anton">
            {hostName}
          </p>
        </div>
      )}
      {hovered && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
          onClick={handlePlayButtonClick}
        >
          <FontAwesomeIcon icon={faPlay} className="text-white text-4xl m-2" />
        </div>
      )}
      {fullscreen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center"
          onClick={handleCloseFullscreen}
        >
          <Image src={image} alt="/" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full mt-4" />
          <div className="absolute bottom-0 left-0 bg-white w-600px h-400px p-4">
            <p className="text-black font-semibold font-Anton">
              {hostName}, {showName}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
const Grid = ({ items }) => {
    const columnClasses = classNames(
      'grid',
      'w-[100%]',
      'gap-8',
      'sm:grid-cols-1',
      'md:grid-cols-2',
      'lg:grid-cols-3',
      'xl:grid-cols-3',
      '2xl:grid-cols-4',
      '3xl:grid-cols-4',
      '4xl:grid-cols-4',

      
    );
  
    return (
      <div className="flex justify-center items-center w-[100%] mx-auto">

        <div className={columnClasses}>
        {items.map((item) => (
            <div key={item.id}>
            <GridItem
                image={item.image}
                hostName={item.hostName}
                location={item.location}
                showName={item.showName}
                date={item.date}
            />
            </div>
        ))}
        </div>

      </div>
    );
  };
  


export default Grid;
