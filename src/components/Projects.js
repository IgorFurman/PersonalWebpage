import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// projects data
const projects = [
	{
		name: 'UI/UX Design',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.',
		technologies: 'React',
		link: 'See how it works',
	},
	{
		name: 'Development',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.',
		technologies: 'React',
		link: 'See how it works',
	},
	{
		name: 'Digital Marketing',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.',
		technologies: 'React',
		link: 'See how it works',
	},
	{
		name: 'Product Branding',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.',
		technologies: 'React',
		link: 'See how it works',
	},
];

const Projects = () => {
	return (
		<section className='section' id='projects'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row'>
					{/* text & image */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
					>
						<h3 className='h3 max-w-[455px] mb-16'>
							Projects completed so far
						</h3>

					</motion.div>
					{/* projects  */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1'
					>
						{/* projects list */}
						<div>
							{projects.map((project, index) => {
								// destructure projects
								const { name, description, technologies, link } = project;
								return (
									<div
										className='border-b border-white/20 h-[146px] mb-[38px] flex'
										key={index}
									>
										<div className='max-w-[476px]'>
											<h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
												{name}
											</h4>
											<p className='font-secondary leading-tight'>
												{description}
											</p>
											<p className='font-secondary leading-tight mt-3'>
												Used technologies: {technologies}
											</p>
										</div>
										<div className='flex flex-col flex-1 items-end'>
											<a
												href='#'
												className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
											>
												<BsArrowUpRight />
											</a>
											<a href='#' className='text-gradient text-sm'>
												{link}
											</a>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
