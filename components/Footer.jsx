import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
        <div className="flex justify-between items-center bg-black text-white p-6 mt-16">
            {/* Left Section */}
            <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                    <div className="bg-white w-8 h-8"></div> {/* Placeholder for Logo */}
                    <h1 className=" font-thin">F4A</h1>
                </div>
                <p className=" font-thin">Free For All radio is an independent radio based in Istanbul broadcasting for the world.</p>
            </div>

            {/* Center Section */}
            <div className="space-y-2">
                <h2 className="font-thin">QUICK LINKS</h2>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline font-thin">Support Us</a></li>
                    <li><a href="#" className="hover:underline font-thin">Archive</a></li>
                    <li><a href="#" className="hover:underline font-thin">About</a></li>
                </ul>
            </div>

            {/* Right Section */}
            <div className="space-y-2">
                <h2 className="font-thin">CONTACT US</h2>
                <p className="font-thin">Contact us at</p>
                <a href="mailto:freeforallradio@gmail.com" className="hover:underline font-thin">freeforallradio@gmail.com</a>
                <h2 className="font-thin mt-2 ">FOLLOW US</h2>
                <p className="font-thin">@freeforall</p>
            </div>
        </div>
    );
};

export default Footer;
