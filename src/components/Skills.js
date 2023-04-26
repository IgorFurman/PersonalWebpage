import React from 'react';

import { Carousel } from 'react-carousel3';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import JsLogo from '../assets/javascript-1.svg';
import Html5Logo from '../assets/html5-logo.svg';
import ReactLogo from '../assets/react-logo.svg';
import ReduxLogo from '../assets/redux-logo.svg';
import CssLogo from '../assets/css-logo.svg';
import SassLogo from '../assets/sass-logo.svg';

const Skills = () => {
	return (
		<section className='h-[450px]' id='skills'>
			<div className='container mx-auto'>
				<motion.h2
					variants={fadeIn('up', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='h2 p-5 text-gradient text-lg border solid'
				>
					Technology stack.
				</motion.h2>
				<Carousel height={70 + '%'} width={100 + '%'} autoPlay={true}>
					<div key={1} className='flex justify-items-center mt-20'>
						<img alt='java script logo' src={JsLogo} />
					</div>
					<div key={2} className='flex justify-items-center mt-20'>
						<img alt='react logo' src={ReactLogo} />
					</div>
					<div key={3} className='flex justify-items-center mt-20'>
						<img alt='sass logo' src={SassLogo} />
					</div>
					<div key={4} className='flex justify-items-center mt-20'>
						<img alt='html logo' src={Html5Logo} />
					</div>
					<div key={5} className='flex justify-items-center mt-20'>
						<img alt='css logo' src={CssLogo} />
					</div>
					<div key={6} className='flex justify-items-center mt-20'>
						<img alt='redux logo' src={ReduxLogo} />
					</div>
				</Carousel>
			</div>
		</section>
	);
};

export default Skills;
