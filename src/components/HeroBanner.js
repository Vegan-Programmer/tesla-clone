import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "animate.css";

const HeroBanner = () => {
	return (
		<div>
			<div className="absolute inset-x-0 top-[18%] text-center">
				<h1 className="text-4xl font-bold animate__animated animate__fadeInUp">
					Model 3
				</h1>
				<p className="p-2 text-sm animate__animated animate__fadeInUp">
					Leasing starting at <span>$349/mo</span>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
				<a href="https://www.tesla.com/model3/design#overview">
					<button className="bg-[#393c41] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white animate__animated animate__fadeInLeft">
						Custom Order
					</button>
				</a>
				<a href="https://www.tesla.com/drive">
					<button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-[#393c41] animate__animated animate__fadeInRight">
						Demo Drive
					</button>
				</a>
			</div>
			<div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
				<FiChevronDown size={24} />
			</div>
		</div>
	);
};

export default HeroBanner;
