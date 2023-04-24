import React from 'react';
// countup
import CountUp from 'react-countup'
// observer hook
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant 
import {fadeIn} from '../variants'

const About = () => {
  return <section 
  className ='section'
  id='about'>About</section>;
};

export default About;
