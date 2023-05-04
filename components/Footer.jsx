import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="bg-f4a-gray h-[32vh] w-[100%] justify-center items-center flex">
			<div className="h-[60%] w-[90%] bg-f4a-black flex items-center justify-around border-b-2  border-t-2 border-f4a-black ">
				<img src="/F4A_RGB_Logo-04.svg" alt="My Logo" className="w-6 h-6 sm:w-8 md:w-10 lg:w-12 xl:w-16 2xl:w-20 sm:h-8 md:h-10 lg:h-12 xl:h-16 2xl:h-20" />
				<Link className="hover:text-red" href="/livesets">
					{" "}
					Explore{" "}
				</Link>
				<Link className="hover:text-red text-sm" href="/livesets">
					{" "}
					Schedule{" "}
				</Link>
				<Link className="hover:text-red text-sm" href="/livesets">
					{" "}
					Channels{" "}
				</Link>
				<div className="md:flex hidden w-[54%] h-[60%] bg-f4a-transparent rounded-full items-center border-2 border-black justify-center ">
					<div className="w-[90%] h-[50%] flex items-center justify-center bg-transparent">
						<div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center bg-purple">
							<img
								src="/F4A_RGB_Logo-04.svg"
								alt="My Logo"
								className="w-14 h-14"
							/>
						</div>
						<div className="border-l-2 border-black w-2 h-6 sm:w-4 md:w-6 lg:w-8 xl:w-10 2xl:w-12 sm:h-8 md:h-10 lg:h-14 xl:h-16 2xl:h-20 flex flex-col items-center justify-center pl-4 ml-4 text-black text-sm">
							<div className='ml-8'>FREE4ALL</div>
							<div className='ml-8'>RADIO</div>
						</div>
						<div className="bg-transparent w-[50%] h-[60%] flex justify-between items-center ml-auto ">
							<div className="w-2 h-2 sm:w-4 md:w-6 lg:w-8 xl:w-10 2xl:w-12 sm:h-4 md:h-6 lg:h-8 xl:h-10 2xl:h-12  rounded-full bg-black" />
							<div className="w-2 h-2 sm:w-4 md:w-6 lg:w-8 xl:w-10 2xl:w-12 sm:h-4 md:h-6 lg:h-8 xl:h-10 2xl:h-12  rounded-full bg-black" />
							<div className="w-2 h-2 sm:w-4 md:w-6 lg:w-8 xl:w-10 2xl:w-12 sm:h-4 md:h-6 lg:h-8 xl:h-10 2xl:h-12  rounded-full bg-black" />
							<div className="w-2 h-2 sm:w-4 md:w-6 lg:w-8 xl:w-10 2xl:w-12 sm:h-4 md:h-6 lg:h-8 xl:h-10 2xl:h-12  rounded-full bg-black" />
							<div className="w-2 h-2 sm:w-4 md:w-6 lg:w-8 xl:w-10 2xl:w-12 sm:h-4 md:h-6 lg:h-8 xl:h-10 2xl:h-12  rounded-full bg-black" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
