import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../../components/layout'
import MainNavigation from '../../components/main-navigation'
import navbar from '../../components/navbar.jsx'
import Navbar from '../../components/navbar.jsx'
import Radioblock from '../../components/radioblock'
import Link from "next/link";
import AnimatedGrid from "../../components/AnimatedGrid";
import Grid from "../../components/Grid";
import { archives } from "../../components/archivesData";
import Image from "next/image";
import Footer from "../../components/Footer";
import Slider2 from "../../components/Slider2";
import { SliderData } from "../../components/SliderData";
import "swiper/css";
import dynamic from "next/dynamic";
import AudioPlayer from '../../components/audioPlayer.jsx'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      
		<div className="w-screen h-max bg-white relative ">
			

			
			<AudioPlayer
						filename="DemoSongs/Song1.mp3"
						trackName="Tower Block Dreams Show"
						imgSrc="DemoSongs/tou.jpeg"
					/>
			
			
		</div>
      <Component {...pageProps} />
    </>
  )
}
