import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../data";
import ForwardedSliderItem from "./SliderItem";

import "./index.css";

const onInit = () => {
	const targetNode = document.querySelector(".slick-active");
	const targetEls = targetNode.querySelectorAll(".animated");
	targetEls.forEach((el) => {
		el.classList.add("active", "fadeUp-in");
	});
};

const handleOnChange = (idx) => {
	const afterEl = document.querySelector(`[data-index='${idx}']`);
	const afterTargetEls = afterEl.querySelectorAll(".animated");
	afterTargetEls.forEach((item) => {
		item.classList.add("active", "fadeUp-in");
	});
};

const handleBeforeChange = (prevId, newId) => {
	const prev = document.querySelector(`[data-index='${prevId}']`);
	const prevTargetEls = prev.querySelectorAll(".animated");
	prevTargetEls.forEach((item) => {
		item.classList.remove("fadeUp-in");
		item.classList.add("fadeUp-out");
		const timer = setTimeout(() => {
			item.classList.remove("fadeUp-out", "active");
			clearTimeout(timer);
		}, [300]);
	});
	const after = document.querySelector(`[data-index='${newId}']`);
	const afterTargetEls = after.querySelectorAll(".animated");
	afterTargetEls.forEach((item) => {
		item.classList.remove("fadeUp-in");
		item.classList.add("fadeUp-out");
		item.classList.remove("fadeUp-out", "active");
	});
};

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
	speed: 1000,
	autoPlay: false,
	onInit: () => {
		onInit();
	},
	afterChange: (idx) => {
		handleOnChange(idx);
	},
	beforeChange: (prevId, newId) => {
		handleBeforeChange(prevId, newId);
	}
};

function FrontPageSlider() {
	return (
		<Slider {...settings}>
			{data.map((item) => (
				<ForwardedSliderItem key={item.id} {...item} />
			))}
		</Slider>
	);
}

export default FrontPageSlider;
