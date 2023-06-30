import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const largeProjects = [
	{
		name: 'Big Cloud - e-commerce VapeShop',
		description:
			'Big Cloud - VapeShop is a robust, feature-rich e-commerce application developed with React.js. It offers an intuitive user experience, complete with product viewing, sorting, and filtering capabilities, alongside an integrated cart system and robust profile management features.',
		technologies: 'React.js, Firebase, CSS',
		link: 'https://igorfurman.github.io/VapeShop/',
	},
	{
		name: 'Plan Your Trip',
		description:
			'Plan Your Trip is a comprehensive application for travel planning. It includes functions like Display of attractions, hotels, restaurants and weather based on city search, adding places to a personal list and downloading it. The application interacts with a custom backend.',
		technologies: 'React.js, Redux, Express.js, StyledComponents',
		link: 'https://igorfurman.github.io/PlanYourTrip/',
	},
	{
		name: 'ForestWebside',
		description:
			'Forest was my first personal project. It is simple recreational park company webpage. Offers main page, contact page and offer details page.',
		technologies: 'Gulp.js, Vanilla JavaScript, SASS, HTML',
		link: 'https://github.com/IgorFurman/ForestWebside',
	},
];

const smallProjects = [
	{
		name: 'React Calculator',
		description:
			'This project is a simple calculator.Basic arithmetic operations including addition, subtraction, multiplication, and division.Supports more complex mathematical operations such as percentage and square operation ^. Clear all input using the clear button C. Clean and intuitive UI which includes an input display and an interactive grid of buttons.',
		technologies: 'React.js, StyledComponents',
		link: 'https://github.com/IgorFurman/Calculator-React-App',
	},
	{
		name: 'Wallet - Personal Finance Manager',
		description:
			'Wallet is a personal finance tool. It allows for adding income and expense transactions, viewing a list of them, and calculating the balance. Features include deleting individual or all transactions and theme switching between light and dark.',
		technologies: 'Vanilla JavaScript, CSS, HTML',
		link: 'https://github.com/IgorFurman/Finaces-Menager',
	},
	{
		name: 'ToDo List App',
		description:
			"This project is a simple ToDo List application. The app provides an interface for adding, editing, and removing tasks. The tasks are stored in the browser's local storage.",

		technologies: 'Vanilla JavaScript, CSS, HTML',
		link: 'https://github.com/IgorFurman/TodoList',
	},
	{
		name: 'Plan Your Trip - backend',
		description:
			'This is an application that serves as an intermediary for Google Places API. It allows client-side applications to retrieve detailed information. It also keep the API keys safe.',

		technologies: 'Express.js',
		link: 'https://github.com/IgorFurman/plan-your-trip-backend',
	},
];

const Projects = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section className='md:section' id='projects'>
			<div className='container mx-auto'>
				<motion.h2
					variants={fadeIn('left', 0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='h2 text-accent'
				>
					{' '}
					Projects completed so far
					<div className='flex gap-x-6 lg:gap-x-10 mb-12 lg:col-span-2' ref={ref}>
						<div>
							<div className='text-[40px] font-tertiary text-gradient mt-2'>
								{inView ? <CountUp start={0} end={7} duration={9} /> : null}
							</div>
						</div>
					</div>
				</motion.h2>
				<ProjectSection title='Big Projects' projects={largeProjects} />
				<ProjectSection title='Small Projects' projects={smallProjects} />
			</div>
		</section>
	);
};

const ProjectSection = ({ title, projects }) => (
	<>
		<motion.div
			variants={fadeIn('right', 0.3)}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.3 }}
		>
			<h3 className=' h3 text-accent font-primary mt-1 mb-6 text-left border-b border-b-accent'>
				{title}:
			</h3>
		</motion.div>
		<div className='grid lg:grid-cols-2 gap-x-6 gap-y-12'>
			{projects.map((project, index) => (
				<motion.div
					variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0.5)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='border-b border-gray-200'
					key={index}
				>
					<ProjectCard {...project} />
				</motion.div>
			))}
		</div>
	</>
);

const ProjectCard = ({ name, description, technologies, link }) => (
	<div className='flex flex-col space-y-6'>
		<div>
			<h4 className='text-[20px] tracking-wider font-primary font-semibold '>
				{name}
			</h4>
			<p
				className='font-secondary leading-tight mt-2'
				style={{ textIndent: '2em' }}
			>
				{description}
			</p>
			<p className='font-secondary leading-tight mt-2'>
				<b>Used technologies:</b> {technologies}
			</p>
		</div>
		<div className='flex flex-col items-end'>
			<a
				href={link}
				className='btn w-9 h-9 flex justify-center items-center'
				target='_blank'
				rel='noopener noreferrer'
			>
				<BsArrowUpRight />
			</a>
			<a className='text-gradient text-sm mb-1'></a>
		</div>
	</div>
);

export default Projects;
