import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import Radioblock from './radioblock.jsx'
import Marquee from "react-fast-marquee";

const RadioBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
      };
    
    return (
        <div className=' flex bg-f4a-lily w-[30%] h-[80%] items-center ml-auto mr-4 rounded-3xl drop-shadow-md shadow-f4a-gray'>
            <button
                onClick={togglePlayPause}
                className=' bg-f4a-lily rounded-full focus:outline-none left-0 pl-6'>
                <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                size='lg'
                className={isPlaying ? "text-f4a-green" : "text-f4a-green"}
                />
            </button>
            <div className='pl-4 text-start w-[90%] font-Anton overflow-hidden block hidden'>
                <Marquee speed="50"> 
                    SW?TCH - NIGHTMARES AND LIGTHERS
                </Marquee>
            </div>
        </div>
    )
}

export default RadioBar

