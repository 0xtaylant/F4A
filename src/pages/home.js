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
import AudioPlayer from '../../components/audioPlayer.jsx'

function Home() {
	return (
		<div className="w-screen h-max bg-white relative ">
			<div className="bg-white w-[100%] h-[32vh] sm:h-[44vh] md:h-[55-vh] lg:h-[66vh] xl:h-[77vh] 2xl:h-[88vh] relative">
				<Image src={"/flyer2crop2.png"} alt="/" fill />
			</div>

			<div className="w-[100%] h-max pl-8 pr-8 bg-transparent relative">
				<div className="bg-transparent w-[100%] h-14 relative">
					<div className="flex w-[100%] h-[12vh] items-center bg-transparent relative">
						<div className="w-[78%]  sm:w-[78%] md:w-[78%] lg:w-[78%] xl:w-[78%] 2xl:w-[78%] h-[90%] bg-f4a-green ml-4 mb-14 z-20 rounded-3xl relative">
							<div className="w-[90%] h-[50%] ml-[2%] bg-transparent flex items-center border-b-2 border-white">
								<div className="w-[4vh] h-[4vh] border-2 border-white rounded-full bg-transparent flex items-center justify-center">
									<img
										src="/F4A_RGB_Logo-02.svg"
										alt="My Logo"
										className="w-8 h-8"
									/>
								</div>
								<div className="border-l-2 border-white text-white  flex flex-col items-center justify-center pl-4 ml-4">
									<div className="text-sm md:text-base lg:text-lg">
										FREE FOR ALL
									</div>
									<div className="text-xs md:text-sm lg:text-base">
										LOREM IPSUM
									</div>
								</div>
							</div>
							<div className="bg-transparent w-[90%] h-[50%] ml-10">
								<div className="text-white flex items-center h-full bg-transparent text-sm md:text-base lg:text-lg">
									ZART ZURT LOREM IPSUM
								</div>
							</div>
						</div>
						<div className="absolute w-[78%] h-[90%] bg-f4a-lily ml-2 mb-12 rounded-3xl "></div>
						<div className="w-[64px] h-[64px] bg-f4a-gray absolute right-0 mb-14 justify-end aspect-w-1 aspect-h-1 "></div>
					</div>
					<div className="border-b-2 border-f4a-gray w-[100%] mx-auto mb-4%]" />
					<p className="text-4xl w-[100%] m-auto my-8 text-f4a-gray font-Anton">
						FREE4ALL
					</p>
					<div className="h-[36vh] w-[100%] bg-transparent flex scroll mt-8 justify-center">
						<Slider2 slides={archives}></Slider2>
					</div>
					<div className="h-[36vh] w-[100%] bg-transparent flex scroll mt-8 justify-center">
						<Slider2 slides={archives}></Slider2>
					</div>
					<div className="w-[100%] h-[50vh] bg-f4a-transparent mt-8">
						<div className="h-[50%] bg-f4a-orange rounded-b-xl"></div>
						<div className="h-[50%]">
							<img
								src="/flyer2crop2.png"
								alt="/"
								loading="lazy"
								style={{
									objectFit: "cover",
									width: "100%",
									height: "100%",
								}}
							/>
						</div>
					</div>

					<Footer></Footer>
				</div>

			</div>
			<AudioPlayer
						filename="DemoSongs/Song1.mp3"
						trackName="Tower Block Dreams Show"
						imgSrc='/img11.JPG'
					/>
		</div>
	);
}

export default Home;
