import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { FormValidator } from '../validator';

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  }

  return errors;
};
const Contact = () => {
  const { handleInputChange, handleSubmit, errors } = FormValidator(validate);

  return (
    <section className='py-1 lg:section  min-h-screen ' id='contact'>
      <div className='container  mx-auto'>
        <div className='flex flex-col lg:flex-row'>
       
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h2 className='text-[45px] lg:text-[90px] leading-none my-12 text-gradient '>
                Contact<br /> Form
              </h2>
            </div>
          </motion.div>
       
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            onSubmit={handleSubmit}
          >
            <input
              className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ${
                errors.name && 'border-red-500'
              }`}
              type='text'
              name='name'
              placeholder='Name'
              onChange={handleInputChange}
            />
            {errors.name && <p className='text-red-500'>{errors.name}</p>}
            <input
              className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ${
                errors.email && 'border-red-500'
              }`}
              type='text'
              name='email'
              placeholder='E-mail'
              onChange={handleInputChange}
            />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
            <textarea
              className={`bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 ${
                errors.message && 'border-red-500'
              }`}
              name='message'
              placeholder='Message'
              onChange={handleInputChange}
            ></textarea>
            {errors.message && (
              <p className='text-red-500'>{errors.message}</p>
            )}
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;