import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Radioblock from '/components/radioblock.jsx';
import RadioBar from '/components/RadioBar.jsx';
import Playpause from '/components/playpause.jsx';
import { PlayIcon } from '@heroicons/react/24/solid';
import { AiOutlineMenu, AioutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-items-center w-[100%] h-[6vh] fixed z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-f4a-gray shadow-md' : ' bg-transparent text-white'
      }`}
    >
        <div className= "ml-8 bg-white">
            <img src="/f4a-logo.png" width={48} height={32}/>
        </div>
        <nav className={`lg:block flex items-center justify-items-start ${
            scrolled ? 'text-black' : 'text-white'} hover:text-red ml-8 `}>
            <ul className="text-base hidden sm:flex">
                <li className="">
                    <Link className="px-5 py-2 hover:red" href="/home"> Home </Link>
                </li>
                <li className="">
                    <Link className="px-5 py-2 hover:text-red" href="/livesets"> Livesets </Link>
                </li>
                <li className="">
                    <Link className="px-5 py-2 hover:text-red" href="/archive"> Archive </Link>
                </li>
                <li className="">
                    <Link className="px-5 py-2 hover:text-red" href="/events"> Events </Link>
                </li>
                <li className="">
                    <Link className="px-5 py-2 hover:text-red" href="/about"> About </Link>
                </li>
            </ul>
            
            <div className="block sm:hidden z-10" > 
                {nav ? <AioutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
            </div>
            <div className={nav 
                        ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-f4a-green text-center ease-in duration-300 " 
                        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-f4a-green text-center ease-in duration-300"}>
                <ul className="flex flex-wrap text-base">
                    <li className="p-4 text-4xl hover:text-f4a-orange">
                        <Link className="px-5 py-2 hover:red" href="/home"> Home </Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-f4a-orange">
                        <Link className="px-5 py-2 hover:text-red" href="/livesets"> Livesets </Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-f4a-orange">
                        <Link className="px-5 py-2 hover:text-red" href="/archive"> Archive </Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-f4a-orange">
                        <Link className="px-5 py-2 hover:text-red" href="/events"> Events </Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-f4a-orange">
                        <Link className="px-5 py-2 hover:text-red" href="/about"> About </Link>
                    </li>
                </ul>
                
            </div>
          </nav>
          <RadioBar/>
    </div>
  );
};

export default Navbar;
















