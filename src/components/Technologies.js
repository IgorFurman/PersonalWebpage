import React from 'react';
import { Carousel } from 'react-carousel3';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import JsLogo from '../assets/javascript-1.svg';
import Html5Logo from '../assets/html5-logo.svg';
import ReactLogo from '../assets/react-logo.svg';
import ReduxLogo from '../assets/redux-logo.svg';
import CssLogo from '../assets/css-logo.svg';
import SassLogo from '../assets/sass-logo.svg';

const technologies = [
	{ name: 'JavaScript', logo: JsLogo },
	{ name: 'HTML5', logo: Html5Logo },
	{ name: 'React', logo: ReactLogo },
	{ name: 'Redux', logo: ReduxLogo },
	{ name: 'CSS', logo: CssLogo },
	{ name: 'SASS', logo: SassLogo },
];

function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				position: 'absolute',
				left: '50%',
				top: '100%',
				transform: 'translate(-50%, -50%) rotate(90deg)',
				zIndex: '2',
			}}
			onClick={onClick}
		/>
	);
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				position: 'absolute',
				left: '50%',
				top: '2%',
				transform: 'translate(-50%, -50%) rotate(90deg)',
				zIndex: '2',
			}}
			onClick={onClick}
		/>
	);
}

const Technologies = () => {
	const settingsMobileCarousele = {
		dots: false,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		vertical: true,
		verticalSwiping: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<section
			className='min-h-screen md:mt-[100px] lg:mt-[300px] lg:mb-0'
			id='technologies'
		>
			<div className='container mx-auto '>
				<motion.h2
					variants={fadeIn('up', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='h2 p-5 md:mb-[100px] text-gradient text-lg border solid '
				>
					Technology stack.
				</motion.h2>
				<motion.div
					variants={fadeIn('left', 0.3)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
					className='md:flex hidden content-center '
				>
					<Carousel height={500 + 'px'} width={100 + '%'} autoPlay={true}>
						{technologies.map((tech, index) => (
							<div key={index} className='flex justify-items-center '>
								<img alt={`${tech.name} logo`} src={tech.logo} />
								<p className='font-primary mt-2 text-center'>{tech.name}</p>
							</div>
						))}
					</Carousel>
				</motion.div>
			</div>
			<div className='md:hidden h-[400px] mt-10 relative'>
				<motion.div
					variants={fadeIn('left', 0.3)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: false, amount: 0.7 }}
				>
					<Slider {...settingsMobileCarousele} className='relative'>
						{technologies.map((tech, index) => (
							<div
								key={index}
								className='flex flex-col justify-center align-center mx-auto'
							>
								<img
									className='mt-5 mx-auto'
									alt={`${tech.name} logo`}
									src={tech.logo}
								/>
								<p className='font-primary text-center'>{tech.name}</p>
							</div>
						))}
					</Slider>
				</motion.div>
			</div>
		</section>
	);
};

export default Technologies;
