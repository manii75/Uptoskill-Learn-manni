import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';

function WebDevelopment({title,description}) {
  return (
    
    <div className=' bg-black flex flex-col lg:flex-row '>
    <h1 className='text-white py-11 px-10'>Courses > {title}</h1>
    
      <div className=' py-40 flex-1 '>
      
        <img
          className='rounded-full w-24 h-24 '
          src="https://lecontent.sololearn.com/material-images/2dd29b679822473ba95420f5956903c5-Web_development_fundamentals.png"
          alt="Web Development Fundamentals"
        />
        <h1 className='p-10 text-5xl font-bold text-white '>{title}</h1>
        <p className='text-white text-2xl  flex flex-col'>
          {description}
        </p>
      </div>

      <div className='bg-white w-full lg:w-2/3 xl:w-1/3 p-6 sm:p-12 rounded-lg shadow-lg m-10 mr-36'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Create your free Sololearn account</h1>
        <p className='mb-10 text-center'>Learn Web Development to kick start your career!</p>
        <form className='space-y-6'>
          <div>
            <label htmlFor="name" className='block text-lg font-bold text-gray-700'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className='block  text-lg font-bold text-gray-700'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className='block text-lg font-bold text-gray-700'>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder="Your Password"
              required
            />
          </div>
          <button
            type="submit"
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-sky-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2'
          >
            Take free course
          </button>
          <p className='text-center mt-4'>
            This site is protected by reCAPTCHA and the Google <span className='text-sky-400'>Privacy Policy</span> and <span className='text-sky-400'>Terms of Service</span> apply.
          </p>
          <hr className='my-4' />
          <div className='flex justify-around font-bold'>
            <button className='flex items-center rounded-lg border border-black p-2'>
              <FontAwesomeIcon icon={faGoogle} className='mr-2' /> Google
            </button>
            <button className='flex items-center rounded-lg border border-black p-2'>
              <FontAwesomeIcon icon={faApple} className='mr-2' /> Apple
            </button>
            <button className='flex items-center rounded-lg  bg-blue-900 text-white p-2'>
              <FontAwesomeIcon icon={faFacebook} className='mr-2' /> Facebook
            </button>
          </div>
          <p className='text-center mt-4'>Already have an account? <span className='text-sky-400'>Log in</span></p>
          <p className='text-center'>By signing up you agree to our <span className='text-sky-400'>Terms of Use</span></p>
        </form>
      </div>
    </div>
  );
}

export default WebDevelopment;
