"use client";
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
import React, { useState, useEffect } from "react";
import { listFilesInDirectory } from "./api/listFilesInDirectory.js";
import { useAudioPlayer } from '../contexts/AudioPlayerContext.js';

function Home() {
	const [demoSets, setDemoSets] = useState([]);
	const [demoImages, setDemoImages] = useState([]);
	const [combinedSlides, setcombinedSlides] = useState([]);
	const { updateAudioPlayer } = useAudioPlayer();

	const randomTrackNames = ['Track Name 1', 'Track Name 2', 'Track Name 3'];
	const handleSliderItemClick = (item) => {
		// Assuming `item` is the object with filename, trackName, and imgSrc
		updateAudioPlayer(item.filename, item.trackName, item.imgSrc);
	};
	useEffect(() => {
		// Fetch signed URLs for demo images
		const fetchImages = fetch(`/api/listFiles?directory=DemoImages/`)
			.then((response) => response.json())
			.then((data) => {
				const imageFiles = data.files.filter((file) => file !== "DemoImages/");
				return Promise.all(
					imageFiles.map((imgSrc) =>
						fetch(`/api/getImageURL?filename=${imgSrc}`).then((response) =>
							response.json()
						)
					)
				);
			})
			.then((responses) => responses.map((response) => ({ src: response.url })))
			.catch((error) => {
				console.error("Failed to fetch demo images:", error);
			});

		// Fetch signed URLs for demo sets
		const fetchSets = fetch(`/api/listFiles?directory=DemoSets/`)
			.then((response) => response.json())
			.then((data) => {
				const setFiles = data.files.filter((file) => file !== "DemoSets/");
				return Promise.all(
					setFiles.map((setSrc) =>
						fetch(`/api/getImageURL?filename=${setSrc}`).then((response) =>
							response.json()
						)
					)
				);
			})
			.then((responses) => responses.map((response) => ({ src: response.url })))
			.catch((error) => {
				console.error("Failed to fetch demo sets:", error);
			});

		// Execute both fetch operations and update state accordingly
		Promise.all([fetchImages, fetchSets]).then(([formattedImageFiles, formattedSetFiles]) => {
			const combinedSlides = formattedImageFiles.map((item, index) => ({
				imageSrc: item.src, // Assuming each item in formattedImageFiles has a src property
				setSrc: formattedSetFiles[index]?.src, // Assuming each item in formattedSetFiles also has a src property
				// Assign a random track name from the array to each combined slide
				// This example simply cycles through the randomTrackNames array based on the current index
				trackName: randomTrackNames[index % randomTrackNames.length],
			}));
	
			setcombinedSlides(combinedSlides); // Now combinedSlides is an array where each item combines info from both arrays and includes a random track name
		});
		console.log("combinedSlides", combinedSlides);
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
						<Slider2
							slides={combinedSlides}
						></Slider2>
					</div>
					<div className="h-[36vh] w-[100%] bg-transparent flex scroll mt-8 justify-center">
						{/* <Slider2 slides={archives}></Slider2> */}
					</div>
					<div className="border-b-2 border-f4a-gray w-[100%] mx-auto mb-4% pt-8" />
					<div className="bg-transparent flex flex-row">
						<p className="text-3xl  my-8 mr-4 text-black font-Anton">EVENTS</p>
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
