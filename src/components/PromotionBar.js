import React from "react";

const PromotionBar = () => {
	return (
		<div className="bg-white text-center p-4 sticky">
			<p className="text-[#393c41] text-sm">
				Until March 2023, new Model 3 and Model Y vehicles qualify for a $7,500
				federal tax credit for eligible buyers.&nbsp;
				<a
					className="underline underline-offset-4"
					href="https://www.tesla.com/support/incentives"
				>
					Learn More
				</a>
			</p>
		</div>
	);
};

export default PromotionBar;
