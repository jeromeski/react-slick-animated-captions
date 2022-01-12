import React from "react";

const SliderItem = ({ id, title, imgUrl, desc1, desc2, desc3, animationStyle }) => {
	return (
		<div className="item">
			<div className="box text-center">
				<img src={imgUrl} alt={title} />
				<div className="container">
					<h2 className="title animated h1" data-animation="fadeInDown">
						{title}
					</h2>
					<div className="desc animated" data-animation="fadeInUp">
						{desc1}
					</div>
					<div className="desc animated" data-animation="fadeInUp">
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

export default SliderItem;
