import Link from "next/link";
import ImageBox from "../../components/imageBox";
import Image from "next/image";
import AnimatedGrid from "../../components/AnimatedGrid";
import RadioBar from "../../components/RadioBar";
import ScrollView from "../../components/ScrollView";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderData } from "../../components/SliderData";
import { Virtual } from 'swiper';
import 'swiper/css';
import Slider2 from "../../components/Slider2";
import { archives } from "../../components/archivesData";

function Events() {
	// const images = [
	//     '/img1.jpeg',
	//     '/img2.jpeg',
	//     '/img3.jpeg',
	//     '/img4.jpeg',
	//     '/img5.jpeg',
	//     '/img6.jpeg',
	//     '/img7.jpeg',
	//     '/img8.jpeg'
	// ]
	// return (
	//     <AnimatedGrid images={images} />
	// )




	return (

        
		<div className="h-screen w-screen items-center justify-center bg-purple flex scroll">
			<div className="relative flex items-center h-[1000px] w-[1000px]">
                <Slider2 slides={archives}>
                </Slider2>
			</div>
		</div>
	);
}

export default Events;
