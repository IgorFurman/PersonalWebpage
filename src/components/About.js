import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {


	return (
		<section
			className='section min-h-screen lg:mb-[100px]'
			id='about'

		>
			<div className='container mx-auto'>
				<h2 className='h2 text-accent'>About me.</h2>

				<div className='gap-y-10 lg:gap-x-20 lg:items-center'>
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 '
					></motion.div>

					<motion.div
						variants={fadeIn('left', 0.5)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1'
					>
						<h3 className='h3 mb-4 lg:col-span-2'>
							I'm a aspiring Junior Frontend Developer
						</h3>
						<div className='md:text-xl lg:grid lg:grid-cols-2 gap-4'>
							<div>
								<p className='mb-1 ' style={{ textIndent: '2em' }}>
									Hello! I'm a passionate, self-motivated frontend developer
									eager to build intuitive, user-friendly web experiences. I
									learned the basics of coding and programming by completing
									HTML, CSS, and JS courses on Udemy, then further developed my
									skills by learning React through YouTube and official
									documentation. In retrospect, however, I believe I've learned
									the most from creating my own projects.
								</p>
								<p
									className='mb-1 hidden md:block'
									style={{ textIndent: '2em' }}
								>
									I'm a team player who enjoys the collaboration process and am
									always open to feedback to grow and improve my coding
									practices. I'm looking for a junior/internship front-end
									developer role where I can continue to learn and contribute to
									a dynamic, innovative team.
								</p>
							</div>
							<div>
								<p className='mb-1 ' style={{ textIndent: '2em' }}>
									Nowadays I enjoy building personal projects to continually
									expand my skill set and keep up with the latest industry
									trends. Currently, I am still learning more about JavaScript,
									React, Redux and basics about TypeScript, Because I understand
									that the topic is vast and complex, what I can do at the
									moment allows me to solve simple and moderately complex
									problems.
								</p>
								<p className='mb-1 md:hidden' style={{ textIndent: '2em' }}>
									I'm a team player who enjoys the collaboration process and am
									always open to feedback to grow and improve my coding
									practices. I'm looking for a junior/internship front-end
									developer role where I can continue to learn and contribute to
									a dynamic, innovative team.
								</p>
							</div>
						</div>
						<div className='flex gap-x-6 lg:gap-x-10 mb-12 lg:col-span-2'>
							
							
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
