import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-f4a-gray h-[32vh] w-screen justify-center items-center flex'>
            <div className='h-[60%] w-[90%] bg-f4a-black flex items-center justify-around border-b-2 border-f4a-black'>
                <img src="/F4A_RGB_Logo-04.svg" alt="My Logo" className="w-14 h-14" />
                <Link className="px-5 hover:text-red" href="/livesets"> Explore </Link>
                <Link className="px-5 hover:text-red" href="/livesets"> Schedule </Link>
                <Link className="px-5 hover:text-red" href="/livesets"> Channels </Link>
                <div className=" w-[78%] h-[60%] bg-f4a-transparent rounded-full flex items-center border-2 border-black justify-around">
                    <div className="w-[90%] h-[50%] bg-transparent flex items-center bg-black">
                        <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center bg-black">
                            <img src="/F4A_RGB_Logo-04.svg" alt="My Logo" className="w-14 h-14" />
                        </div>
                        <div className="border-l-2 border-black h-20 flex flex-col items-center justify-center pl-4 ml-4 text-black">
                            <div>
                                FREE FOR ALL
                            </div>
                            <div>
                                LOREM IPSUM
                            </div>
                        </div>
                        <div className='bg-transparent w-[50%] h-[60%] flex justify-between items-center ml-auto'>
                            <div className='w-8 h-8 rounded-full bg-black'/>
                            <div className='w-8 h-8 rounded-full bg-black'/>
                            <div className='w-8 h-8 rounded-full bg-black'/>
                            <div className='w-8 h-8 rounded-full bg-black'/>
                            <div className='w-8 h-8 rounded-full bg-black'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
