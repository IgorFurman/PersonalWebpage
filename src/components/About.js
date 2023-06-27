import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {


	return (
		<section
			className='md:section lg:my-auto'
			id='about'

		>
			<div className='container'>
				<h2 className='h2 text-accent'>About me.</h2>

				<div className='gap-y-10 lg:gap-x-20 md:items-center'>
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
							I'm a aspiring React Frontend Developer
						</h3>
						<div className='md:text-xl lg:grid lg:grid-cols-2 gap-4'>
							<div>
								<p className='mb-1 ' style={{ textIndent: '2em' }}>
									Hello! I'm a passionate, self-motivated frontend developer
									eager to build intuitive, user-friendly web experiences. I
									learned the basics of coding and programming by completing
									HTML, CSS, and JS courses on Udemy, then further developed my
									skills by learning more technologies through YouTube and official
									documentation. However, I must admit that the crucible of creating my own projects has proven to be the most enlightening of all.
								</p>
								<p
									className='mb-1'
									style={{ textIndent: '2em' }}
								>
									I'm a team player who enjoys the collaboration process and am
									always open to feedback to grow and improve my coding
									practices. I am in search of a junior/internship front-end developer role to bring my enthusiasm and dedication to a vibrant, innovative team. In this role, I aim to contribute creatively while continuing my learning journey, embracing every challenge as an opportunity to grow and make a difference.
								</p>
							</div>
							<div>
								<p className='mb-1 ' style={{ textIndent: '2em' }}>
								Currently, my focus lies in further mastering building React applications and am taking strides towards gaining a solid foundation in TypeScript. Though the realm of coding is vast and complex, my current skill set equips me to solve simple to moderately complex problems. I believe in lifelong learning, and the ever-evolving landscape of technology offers an abundance of opportunities to do just that.
								</p>
								<p className='mb-1 ' style={{ textIndent: '2em' }}>
								Outside the realm of coding, I'm a tech enthusiast who loves exploring the latest gadgets. I'm also a movie buff and an avid fitness enthusiast who enjoys hitting the gym and boxing to keep myself physically fit and mentally sharp. You'll often find me planning my next adventure, as my love for travel fuels my curiosity and creativity. 
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
