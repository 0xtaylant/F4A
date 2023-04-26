import React, {useState} from 'react'
import { SliderData } from '/components/SliderData.jsx'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = () => {
    const slides = [
        {
            image:'/img1.jpeg'
        },
        {
            image:'/img2.jpeg'
        },
        {
            image:'/img3.jpeg'
        },
    ]
    const[current, setCurrent] = useState(0);
    var slidesLength = slides.length;
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? slidesLength - 1 : current - 1);
    }
    if (!Array.isArray(slides) || slidesLength <= 0  ) {
        return null;
    }
    return (
        <div className='  bg-black '>
            <div className='relative flex justify-center h-[64%] w-[98%] bg-black '>
                {slides.map((slide,index)=>{
                    return(
                        <div key={index} className={index === current 
                        ? 'opacity-[1] ease-in duration-10 h-screen w-screen pt-24 ' 
                        : 'opacity-0 bg-orange h-screen w-screen pt-24'}>
                        <FaArrowCircleLeft
                        onClick={prevSlide}
                        className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                        size={50}
                        />
                        {index === current && (
                            <Image
                                src={slide.image}
                                alt='/'
                                fill
                            />
                        )}
                        <FaArrowCircleRight
                            onClick={nextSlide}
                            className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                            size={50}
                        />
                        <div className='bg-black w-80 h-48 top-[70%] right-[60%] absolute'/>
                            <text>
                                bg-blend-overlay	
                            </text>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Slider


