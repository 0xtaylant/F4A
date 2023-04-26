import{ FiMenu } from "react-icons/fi"
import {useState} from 'react';
import Link from 'next/link';

function MainNavigation() {
    return (
        <header className="border-b border-gray-30 bg-orange-500 ">
            <div className="flex flex-wrap items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full bg-black-500">
                <img src="/NTS_Radio_logo.svg.png" width={64} height={64}/>

                <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer">

                </FiMenu>
                <nav className="lg:block hidden flex flex-wrap items-center justify-center text-gray-900 dark:text-black">
                    <ul className="flex flex-wrap justify-between text-base text-black-800 bg-blue-500">
                        <li>
                            <Link className="px-5 py-2 hover:text-red" href="/home"> Home </Link>
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
        </header>
    )
  }

  export default MainNavigation;