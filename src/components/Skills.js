import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';

const actualSkills = [
	'Semantic & Acessible HTML',
	'Responsible Web Design',
	'Teamwork',
	'Markdown',
	'Immutability',
	'CSS BEM convention',
	'CSS Grid',
	'CSS Flexbox',
	'Tailwind',
	'Bootstrap',
	'Styled Components',
	'React Router',
	'React Context',
	'Redux (Toolkit)',
	'Redux-Saga',
	'React Hooks',
	'Error handling',
	'API (fetch, axios)',
	'JavaScript (ES6+)',
	'Promises, Async/Await',
	'GitHub Pull Requestest & Review',
	'Trello',
	'Scrum',
	'NPM',
	'React',
	'Git',
	'Firebase (basics)',
	'Node.js (basics)',
	'Express (basics)',
];

const futureSkills = [
	'TypeScript',
	'JS Classes',
	'Unit testing',
	'Cypress',
	'React Native',
];

const Skills = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});
	return (
		<section id='skills' className='md:section' ref={ref}>
			<div className='container mx-auto mt-20 lg:mt-2'>
				<motion.h2
					variants={fadeIn('up', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='h2 p-5 text-accent text-center'
				>
					Current skillset
				</motion.h2>
				<div className='space-y-4 md:space-y-8'>
					<motion.div
						className='mb-4 p-4 border border-gray-300 rounded-md shadow-md'
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						<ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4'>
							{actualSkills.map((skill, index) => (
								<li key={index} className='list-disc ml-5'>
									{skill}
								</li>
							))}
						</ul>
					</motion.div>
					<motion.h2
						variants={fadeIn('up', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						className='h2 p-5 text-accent text-center'
					>
						Skills to be learned
					</motion.h2>
					<motion.div
						className='p-4 border border-gray-300 rounded-md shadow-md'
						variants={fadeIn('left', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
					>
						<ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4'>
							{futureSkills.map((futureSkill, index) => (
								<li key={index} className='list-disc ml-5'>
									{futureSkill}
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
