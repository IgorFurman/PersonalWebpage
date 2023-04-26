import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// validator
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
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Get in <br /> touch!
              </h2>
            </div>
          </motion.div>
          {/* form */}
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
              placeholder='Your name'
              onChange={handleInputChange}
            />
            {errors.name && <p className='text-red-500'>{errors.name}</p>}
            <input
              className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ${
                errors.email && 'border-red-500'
              }`}
              type='text'
              name='email'
              placeholder='Your email'
              onChange={handleInputChange}
            />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
            <textarea
              className={`bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 ${
                errors.message && 'border-red-500'
              }`}
              name='message'
              placeholder='Your message'
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