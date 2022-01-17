import React from "react";

const SliderItem = ({ id, title, titleSpan, imgUrl, desc1, desc2, desc3, isActive }) => {
	return (
		<div
			className="item"
			style={{ backgroundImage: `url(${require("../../../assets/images" + imgUrl)})` }}>
			<div className="box text-center">
				<div className="container">
					<div className="rating animated">
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
						<i className="fa fa-star"></i>
					</div>
					<h2 className="title animated h1">
						{title}
						<br />
						<span>{titleSpan}</span>
					</h2>
					<div className="desc animated">{desc1}</div>
					<div className="desc animated">{desc2}</div>
					<div className="desc animated">
						<a href="#!" className="btn btn-clean">
							{desc3}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};



export default SliderItem;
