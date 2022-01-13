import React, { Fragment, useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../data";
import ForwardedSliderItem from "./SliderItem";

import "./index.css";

const handleOnChange = (setIsActive) => {
	setIsActive(true);
};

const handleBeforeChange = (setIsActive) => {
	setIsActive(false);
};

const FrontPageSlider = () => {
	const settings = {
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		speed: 2000,
		autoPlay: false,
		afterChange: (idx) => {
			handleOnChange(setIsActive);
		},
		beforeChange: (prevId, newId) => {
			handleBeforeChange(setIsActive);
		}
	};

	const [slick, setSlick] = useState({});
	const [isActive, setIsActive] = useState(true);

	let itemRef = useRef([]);

	useEffect(() => {
		setSlick(settings);
	}, []);

	useEffect(() => {
		if (itemRef.current) {
		}
	}, [itemRef]);

	return (
		<Fragment>
			<Slider {...slick}>
				{data.map((item) => (
					<ForwardedSliderItem
						ref={(el) => (itemRef.current[item.id] = el)}
						key={item.id}
						{...item}
						isActive={isActive}
					/>
				))}
			</Slider>
		</Fragment>
	);
};

export default FrontPageSlider;

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