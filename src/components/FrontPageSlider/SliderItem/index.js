import React, { forwardRef } from "react";

const SliderItem = ({ id, title, imgUrl, desc1, desc2, desc3, isActive }, ref) => {
	return (
		<div className="item" ref={ref}>
			<div className="box text-center">
				<img src={imgUrl} alt={title} />
				<div className="container">
					<h2
						className={`title animated h1 ${isActive ? "fadeInDown" : ""}`}
						data-animation="fadeInDown">
						{title}
					</h2>
					<div
						className={`desc animated ${isActive ? "fadeInUp" : ""}`}
						data-animation="fadeInDown">
						{desc1}
					</div>
					<div
						className={`desc animated ${isActive ? "fadeInUp" : ""}`}
						data-animation="fadeInDown">
						{desc2}
					</div>
					<div className="animated" data-animation="fadeInUp">
						<a href="#" className="btn btn-clean">
							{desc3}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const ForwardedSliderItem = forwardRef(SliderItem);

export default ForwardedSliderItem;
