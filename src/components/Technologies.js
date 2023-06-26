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

const technologies = [
  { name: "JavaScript", logo: JsLogo },
  { name: "HTML5", logo: Html5Logo },
  { name: "React", logo: ReactLogo },
  { name: "Redux", logo: ReduxLogo },
  { name: "CSS", logo: CssLogo },
  { name: "SASS", logo: SassLogo }
]

const Technologies = () => {
	return (
		<section className='min-h-screen md:mt-[100px] lg:mt-[300px] lg:mb-0' id='technologies'>
			<div className='container mx-auto '>
				<motion.h2
					variants={fadeIn('up', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='h2 p-5 md:mb-[200px] text-gradient text-lg border solid '
				>
					Technology stack.
				</motion.h2>
        <div className="md:flex hidden content-center ">
				  <Carousel height={500 + 'px'} width={100 + '%'} autoPlay={true} >
					  {technologies.map((tech, index) => (
              <div key={index} className='flex justify-items-center '>
                <img alt={`${tech.name} logo`} src={tech.logo} />
								<p className='mt-2 text-center'>{tech.name}</p>
              </div>
            ))}
				  </Carousel>
        </div>
        <div className="md:hidden">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center mb-10">
              <img className='mt-5' alt={`${tech.name} logo`} src={tech.logo} />
              <p className='font-primary'>{tech.name}</p>
            </div>
          ))}
        </div>
			</div>
		</section>
	);
};

export default Technologies;
