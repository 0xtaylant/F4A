import React from 'react'
import Link from 'next/link';
import Radioblock from '/components/radioblock.jsx'
import Playpause from '/components/playpause.jsx'
import { PlayIcon } from '@heroicons/react/24/solid'
import {AiOutlineMenu, AioutlineClose } from 'react-icons/ai'


const NavbarTest = () => {
    return(
        <div className="fixed z-50  bg-matrix">
            <div className="flex items-center justify-items-center w-screen h-[4vh] bg-black">
                <div className= "ml-4 bg-white">
                <img src="/f4a-logo.png" />
                </div>
                <nav className="lg:block flex items-center justify-center text-white hover:text-red ml-40 ">
                    <ul className="flex flex-wrap text-base">
                        <li>
                            <Link className="px-5 py-2 hover:red" href="/home"> Home </Link>
                        </li>
                        <li>
                            <Link className="px-5 py-2 hover:text-red" href="/livesets"> Livesets </Link>
                        </li>
                        <li>
                            <Link className="px-5 py-2 hover:text-red" href="/archive"> Archive </Link>
                        </li>
                        <li>
                            <Link className="px-5 py-2 hover:text-red" href="/events"> Events </Link>
                        </li>
                        <li>
                            <Link className="px-5 py-2 hover:text-red" href="/about"> About </Link>
                        </li>
                    </ul>
                    
                </nav>

            </div>
        </div>
        
        
    )
}

export default NavbarTest





