import "@/styles/globals.css";

import Navbar from "../../components/navbar.jsx";

import "swiper/css";

import AudioPlayer from "../../components/audioPlayer.jsx";
import React from "react";


import { AudioPlayerProvider } from '../contexts/AudioPlayerContext.js'; // Adjust the path as necessary

// Other imports...

export default function App({ Component, pageProps }) {
	return (
	  <AudioPlayerProvider>
		<Navbar />
		<div className="w-screen h-max bg-white relative ">
		  <AudioPlayer /> {/* Now dynamically updated via context */}
		</div>
		<Component {...pageProps} />
	  </AudioPlayerProvider>
	);
  }