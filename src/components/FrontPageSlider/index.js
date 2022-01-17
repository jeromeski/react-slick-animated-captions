import React, { Fragment} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../data";
import SliderItem from "./SliderItem";

import "./index.css";


const NextArrow = ({ onClick }) => (
	<button onClick={onClick} className="next-btn">
		<span className="icon icon-chevron-right"></span>
	</button>
);

const PrevArrow = ({ onClick }) => (
	<button onClick={onClick} className="prev-btn">
		<span className="icon icon-chevron-left"></span>
	</button>
);

const settings = {
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
	speed: 500,
	autoPlay: false,
	onInit: () => {
		const targetNode = document.querySelector(".slick-active");
		const targetEls = targetNode.querySelectorAll(".animated");
		targetEls.forEach((el) => {
			el.classList.add("active", "fadeInUp");
		});
	},
	afterChange: (idx) => {
		const afterEl = document.querySelector(`[data-index='${idx}']`);
		const afterTargetEls = afterEl.querySelectorAll(".animated");
		afterTargetEls.forEach((item) => {
			item.classList.add("active", "fadeInUp");
		});
	},
	beforeChange: (prevId, newId) => {
		const prev = document.querySelector(`[data-index='${prevId}']`);
		const prevTargetEls = prev.querySelectorAll(".animated");
		prevTargetEls.forEach((item) => {
			item.classList.remove("fadeInUp");
			item.classList.add("fadeInOut");
			const timer = setTimeout(() => {
				item.classList.remove("fadeInOut", "active");
				clearTimeout(timer);
			}, [200]);
		});
	}
};



function FrontPageSlider() {


	return (
		<Fragment>
			<Slider {...settings}>
				{data.map((item) => (
					<SliderItem key={item.id} {...item} />
				))}
			</Slider>
		</Fragment>
	);
};

export default FrontPageSlider;




