import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../data";
import SliderItem from "./SliderItem";

const settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	autoplay: true
};

const FrontPageSlider = () => {
	const [slick, setSlick] = useState({});

	useEffect(() => {
		setSlick(settings);
	}, []);

	return (
		<Fragment>
			<Slider {...slick}>
				{data.map((item) => (
					<SliderItem key={item.id} {...item} />
				))}
			</Slider>
		</Fragment>
	);
};

export default FrontPageSlider;
