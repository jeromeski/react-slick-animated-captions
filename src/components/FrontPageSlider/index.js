import React, { Fragment, useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../data";
import ForwardedSliderItem from "./SliderItem";

import "./index.css";

const FrontPageSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 5000,
		slidesToShow: 1,
		autoplay: true,
		afterChange: () => {
			setIsActive(true);
			const timer = setTimeout(() => {
				setIsActive(false);
				clearTimeout(timer);
			}, [2000]);
		}
	};

	const [slick, setSlick] = useState({});
	const [isActive, setIsActive] = useState(false);

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
