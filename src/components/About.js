import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section min-h-screen lg:mb-[300px]' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
    
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
        
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a aspiring Junior Frontend Developer
            </h3>
						<div className='md:text-xl'>
						<p className='mb-2 ' style={{ textIndent: "2em" }}>
  Hello! I'm a passionate, self-motivated frontend developer eager
  to build intuitive, user-friendly web experiences. I learned the basics of coding and programming by completing HTML, CSS, and JS courses on Udemy, then further developed my skills by learning React through YouTube and official documentation. In retrospect, however, I believe I've learned the most from creating my own projects.
</p>
<p className='mb-2 ' style={{ textIndent: "2em" }}>
  Nowadays I enjoy building personal projects to continually expand my skill set and keep up with the latest
  industry trends. Currently, I am still learning more about JavaScript, React, Redux and basics about TypeScript, Because I understand that the topic is vast and complex, what I can do at the moment allows me to solve simple and moderately complex problems. 
</p>
<p className='mb-5 ' style={{ textIndent: "2em" }}>
  I'm a team player who enjoys the collaboration process and am
  always open to feedback to grow and improve my coding practices.
  I'm looking for a junior/internship front-end developer role where I can
  continue to learn and contribute to a dynamic, innovative team.
</p>
</div>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={7} duration={7} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Made
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;