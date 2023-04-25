import React from 'react';

import { Carousel } from 'react-carousel3';
import { motion } from 'framer-motion';

import JsLogo from '../assets/javascript-1.svg';
import Html5Logo from '../assets/html5-logo.svg';
import ReactLogo from '../assets/react-logo.svg';
import ReduxLogo from '../assets/redux-logo.svg';
import CssLogo from '../assets/css-logo.svg';
import SassLogo from '../assets/sass-logo.svg';

const Skills = () => {
	return (
		<section className='section' id='skills'>
			<div className='container mx-auto'>
				<h2 className='h2 p-5 text-gradient text-lg border solid p'>Technology stack.</h2>
				<Carousel height={50 + '%'} width={100 + '%'} autoPlay={true}>
					<div key={1} className='flex justify-items-center'>
						<img alt='java script logo' src={JsLogo} />
					</div>
					<div key={2} className='flex justify-items-center'>
						<img alt='react logo' src={ReactLogo} />
					</div>
					<div key={3} className='flex justify-items-center'>
						<img alt='sass logo' src={SassLogo} />
					</div>
					<div key={4} className='flex justify-items-center'>
						<img alt='html logo' src={Html5Logo} />
					</div>
					<div key={5} className='flex justify-items-center'>
						<img alt='css logo' src={CssLogo} />
					</div>
					<div key={6} className='flex justify-items-center'>
						<img alt='redux logo' src={ReduxLogo} />
					</div>
				</Carousel>
			</div>
		</section>
	);
};

export default Skills;
