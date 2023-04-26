import React from "react";

const ScrollView = () => {
	return (
		<div className="h-screen w-screen items-center justify-center bg-purple flex scroll">
			<div className="relative flex items-center h-[40%] w-[40%]">
				<div
					id="slider"
					className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
				>
					<div className="h-[100%] w-[400px] bg-black " />
					<div className="h-[100%] w-[400px] bg-white " />
					<div className="h-[100%] w-[400px] bg-matrix " />
					<div className="h-[100%] w-[400px] bg-white " />
				</div>
			</div>
		</div>
	);
};

export default ScrollView;
