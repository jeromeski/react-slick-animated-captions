import React, { forwardRef } from "react";

const SliderItem = ({ id, title, titleSpan, imgUrl, desc1, desc2, desc3, isActive }, ref) => {
	return (
		<div className="item" ref={ref} style={{ backgroundImage: `url(${imgUrl})` }}>
			<div className="box text-center">
				<div className="container">
					<h2 className={`title animated h1 ${isActive ? "fadeInDown active" : ""}`}>
						{title}
						<br />
						<span>{titleSpan}</span>
					</h2>
					<div className={`desc animated ${isActive ? "fadeInUp active" : ""}`}>{desc1}</div>
					<div className={`desc animated ${isActive ? "fadeInUp active" : ""}`}>{desc2}</div>
					<div className={`animated ${isActive ? "fadeInUp active" : ""}`}>
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
