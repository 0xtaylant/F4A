"use client"
import Link from "next/link";
import ImageCarousel from "components/imageCarousel.jsx";
import AnimatedGrid from "../../components/AnimatedGrid";
import Grid from "../../components/Grid";
import { archives } from "../../components/archivesData";
import Image from "next/image";
import Footer from "../../components/Footer";
import Slider2 from "../../components/Slider2";
import { SliderData } from "../../components/SliderData";
import "swiper/css";
import dynamic from "next/dynamic";
import AudioPlayer from "../../components/audioPlayer.jsx";
import React, { useState, useEffect } from 'react';
import { listFilesInDirectory } from './api/listFilesInDirectory.js';

function Home() {

	const [demoSets, setDemoSets] = useState([]);
	const [demoImages, setDemoImages] = useState([]);
  
	useEffect(() => {
		// Fetch demo sets
		fetch(`/api/listFiles?directory=DemoSets/`)
		  .then(response => response.json())
		  .then(data => {
			const formattedSetFiles = data.files.map(file => ({ /* format as needed */ }));
			setDemoSets(formattedSetFiles);
			console.log('bbbbbbbbbbb',formattedSetFiles);
		  })
		  .catch(console.error);
	  
		// Fetch demo images
		fetch(`/api/listFiles?directory=DemoImages/`)
		  .then(response => response.json())
		  .then(data => {
			const formattedImageFiles = data.files.map(file => ({ /* format as needed */ }));
			setDemoImages(formattedImageFiles);
		  })
		  .catch(console.error);
	  }, []);
	  

	return (
		<div className="w-screen h-auto bg-f4a-transparent flex flex-col ">
			<div className="bg-black w-[100%] min-h-[32vh] sm:min-h-[44vh] md:min-h-[55-vh] lg:min-h-[57vh] xl:min-h-[66vh] 2xl:min-h-[55vh] relative">
			<Image src={"/F4A_RGB_Logo-03.svg"} alt="/" fill />
			</div>

			<div className="w-[100%] h-max pl-8 pr-8 bg-transparent relative">
				<div className="bg-transparent w-[100%] h-14 relative">
					<div className="border-b-2 border-f4a-gray w-[100%] mx-auto mb-4% pt-8" />
					<div className="bg-transparent flex flex-row">
						<p className="text-3xl  my-8 mr-4 text-black font-Anton">
							FREE4ALL
						</p>
						<p className="text-3xl  my-8 text-f4a-gray font-Anton font-thin">
							Recents
						</p>
					</div>

					<div className="h-[36vh] w-[100%] bg-transparent flex scroll mt-8 justify-center">
						<Slider2 slides={demoImages}></Slider2>
					</div>
					<div className="h-[36vh] w-[100%] bg-transparent flex scroll mt-8 justify-center">
						{/* <Slider2 slides={archives}></Slider2> */}
					</div>
					<div className="border-b-2 border-f4a-gray w-[100%] mx-auto mb-4% pt-8" />
					<div className="bg-transparent flex flex-row">
						<p className="text-3xl  my-8 mr-4 text-black font-Anton">
							EVENTS
						</p>
					</div>

					{/* <div className="min-h-[36vh] w-[100%] bg-transparent flex scroll mt-8 justify-center">
						<Slider2 slides={archives}></Slider2>
					</div> */}
					
					<Footer />
				</div>

			</div>

		</div>
	);
}

export default Home;
